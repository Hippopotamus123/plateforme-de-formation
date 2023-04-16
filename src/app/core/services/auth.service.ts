import { Injectable } from '@angular/core';
import { JwtHelperService } from "@auth0/angular-jwt";
import { CookieService } from "ngx-cookie-service";
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(    private cookieService: CookieService,
    ) { }
    /** if token valid */
    isAuthenticated(): boolean {
      const jwtHelper = new JwtHelperService();
      const token = this.getToken();
      if (token) {
        return !jwtHelper.isTokenExpired(token);
      } else {
        return false;
      }
    }
  
    /** get Token */
    getToken(): string {
      return this.cookieService.get("token");
    }
     /** set Token  */
  setToken(value: string): void {
    this.cookieService.delete("token");
    this.cookieService.set("token", value, 365, "/");
  }
   /** clear cookies */
   clearCookies() {
    this.cookieService.deleteAll("/");
    const cookies = document.cookie.split(";");
    for (const element of cookies) {
      const cookie = element;
      const eqPos = cookie.indexOf("=");
      const name = eqPos > -1 ? cookie.substring(0, eqPos) : cookie;
      document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
  }
}