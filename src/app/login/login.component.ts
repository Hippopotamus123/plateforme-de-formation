import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {NgToastService} from 'ng-angular-popup'

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
  constructor(private router:Router,private http:HttpClient,private toast:NgToastService) { }
  
  login(){
    console.log(this.email);
    console.log(this.password);
    let bodyData ={
      email: this.email,
      password: this.password,
    };
    this.http.post('http://127.0.0.1:9000/student/login', bodyData).subscribe((resultData:any)=>{
    console.log(resultData);
    if(resultData.status)
    { this.toast.success({detail:'success message',summary:"login success",duration:5000})
      this.router.navigateByUrl('/sidebar')
    }
    else
    {
      this.toast.error({detail:'error message',summary:"login failed, incorrect email or password",duration:5000})
      console.log('error login')
    }
  });
  }
ngOnInit(): void {
  
}
  

}
