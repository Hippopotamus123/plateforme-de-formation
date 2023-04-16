import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import {  finalize, Observable } from "rxjs";
import { AuthService } from '../services/auth.service';

@Injectable()
export class PdfInterceptor implements HttpInterceptor {
  private url: string = environment.url;
  activeRequests = 0;
  skippUrls = [];

  constructor(private authService:AuthService) {}

  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
   
    if (this.checkLoadingScreen(req)) {
      if (this.activeRequests === 0) {
        return new Observable((observer: any) => {
          const subscription = next.handle(this.addAuthToken(req)).subscribe({
            next: (event: any) => {
              next.handle(req);
            },
            error: (err:any) => {
              observer.error(err);
            },
          });
          return () => {
            subscription.unsubscribe();
          };
        });
      }
      this.activeRequests++;
      return next.handle(req).pipe(
        finalize(() => {
          this.activeRequests--;
        })
      );
    } else {
      return next.handle(req);
    }
  }

  addAuthToken(request: HttpRequest<any>): HttpRequest<any> {
    const token = this.authService.getToken();
    if (!token) {
      return request;
    }
    // If you are calling an outside domain then do not add the token.
    if (!request.url.match(this.url)) {
      return request;
    } else {
      return request.clone({
        headers: request.headers.set("Authorization", "Bearer " + token),
      });
    }
  }
  checkLoadingScreen(req: HttpRequest<any>): boolean {
    let displayLoadingScreen = true;
    for (const skippUrl of this.skippUrls) {
      if (new RegExp(skippUrl).test(req.url)) {
        displayLoadingScreen = false;
        break;
      }
    }
    return displayLoadingScreen;
  }
}
