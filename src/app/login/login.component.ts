import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {NgToastService} from 'ng-angular-popup'
import { AuthService } from '../services/auth-service.service';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
email :string='';
password:string='';
isLogin:boolean =true;
erroMessage: string="";
  constructor(private router:Router,private http:HttpClient,private toast:NgToastService,private authService: AuthService, private cookieService: CookieService) { }
  
  ngOnInit(): void {
    
  }
 
  // -------------------------------------------------------------------------
  login() {
    const bodyData = {
      email: this.email,
      password: this.password,
    };

    this.authService.loginUser(bodyData).subscribe(
      (resultData: any) => {
        console.log(resultData);
        if (resultData.status) {
          this.toast.success({
            detail: 'success message',
            summary: "login success",
            duration: 5000
          });
          this.authService.setToken(resultData.token);
          console.log(resultData.id)
          // this.cookieService.delete('userId');
          this.cookieService.set('userId', String(resultData.id));
          this.router.navigateByUrl('/dashboard');
        } else {
          this.toast.error({
            detail: 'error message',
            summary: "login failed, incorrect email or password",
            duration: 5000
          });
          console.log('error login');
        }
      },
      (error: any) => {
        console.error(error);
        this.erroMessage = 'Failed to connect to server';
      }
    );
  }
  
  }

