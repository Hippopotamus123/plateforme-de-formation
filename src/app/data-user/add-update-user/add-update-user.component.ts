import { Component, Inject, OnInit } from '@angular/core';
import {NgToastService} from 'ng-angular-popup';
import { HttpClient } from '@angular/common/http';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-update-user',
  templateUrl: './add-update-user.component.html',
  styleUrls: ['./add-update-user.component.css']
})
export class AddUpdateUserComponent implements OnInit {
  
  constructor(private http:HttpClient,private toast:NgToastService,private _dialogRef:MatDialogRef<AddUpdateUserComponent>,@Inject(MAT_DIALOG_DATA)public data:any,public userService: UserService) { }
  firstname: string="";
  lastname: string="";
  email: string="";
  password: string="";
  role: string="";
  phoneNumber: string= "" ;
  ngOnInit(): void {

  if (this.data) {
    this.firstname = this.data.firstname;
    this.lastname = this.data.lastname;
    this.email = this.data.email;
    this.password = this.data.password;
    this.role = this.data.role;
    this.phoneNumber = this.data.phoneNumber;
  }
    }
    register()
    {
      let bodyData=
      {
        "firstname" :this.firstname,
        "lastname" :this.lastname,
        "email" :this.email,
        "password" :this.password,
        "role" : this.role,
        "phoneNumber": this.phoneNumber
        
      };
      this.userService.addUser(bodyData).subscribe((resultData: any)=>
      
      {if(resultData.status){
        console.log(resultData);
        this.toast.success({detail:'success message',summary:"student registered successfully",duration:5000})
        this._dialogRef.close(true);
      }
      else{
        this.toast.error({detail:'error message',summary:"register failed, try again later!",duration:5000})
      }
      });
    }
    save(){
      this.register();
    }
  }








// import { Component, Inject, OnInit } from '@angular/core';
// import { NgToastService } from 'ng-angular-popup';
// import { HttpClient } from '@angular/common/http';
// import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
// import { FormBuilder, FormGroup } from '@angular/forms';
// // import { UserService } from '../user.service';
// @Component({
//   selector: 'app-add-update-user',
//   templateUrl: './add-update-user.component.html',
//   styleUrls: ['./add-update-user.component.css']
// })
// export class AddUpdateUserComponent implements OnInit {
//   isEditing!: boolean;
//   studentId: string="";
//   firstname: string = "";
//   lastname: string = "";
//   email: string = "";
//   password: string = "";
//   role: string = "";
//   phoneNumber: string = "";
//   userForm!: FormGroup;

//   constructor(
//     // private _fb: FormBuilder,
//     // private _UserService: UserService,
//     private http: HttpClient,
//     private toast: NgToastService,
//     private _dialogRef: MatDialogRef<AddUpdateUserComponent>,
//     @Inject(MAT_DIALOG_DATA) public data: any
//   ) {}

//   ngOnInit(): void {
//     if (this.data) {
      
//       this.studentId = this.data.id;
//       this.firstname = this.data.firstname;
//       this.lastname = this.data.lastname;
//       this.email = this.data.email;
//       this.password = this.data.password;
//       this.role = this.data.role;
//       this.phoneNumber = this.data.phoneNumber;
//       this.isEditing = true;
//     } else {
//       this.isEditing = false;
//     }
//     // this.userForm.patchValue(this.data);
//   }

//   save(): void {
//     if (this.isEditing) {
//       // Send PUT request to update existing student
//       let bodyData = {
//         firstname: this.firstname,
//         lastname: this.lastname,
//         email: this.email,
//         password: this.password,
//         role: this.role,
//         phoneNumber: this.phoneNumber,
//       };
//       this.http
//       .put(`http://127.0.0.1:9000/students/${this.studentId}`, bodyData).subscribe(
        
//           (resultData: any) => {
//             console.log(resultData);
//             this.toast.success({
//               detail: "success message",
//               summary: "Student updated successfully",
//               duration: 5000,
//             });
//             this._dialogRef.close(true);
//           },
//           (error) => {
//             console.error(error);
//             this.toast.error({
//               detail: "error message",
//               summary: "Update failed, try again later!",
//               duration: 5000,
//             });
//           }
//         );
//     } else {
//       // Send POST request to create new student
//       let bodyData = {
//         firstname: this.firstname,
//         lastname: this.lastname,
//         email: this.email,
//         password: this.password,
//         role: this.role,
//         phoneNumber: this.phoneNumber,
//       };
//       this.http.post("http://127.0.0.1:9000/student/create", bodyData).subscribe(
//         (resultData: any) => {
//           console.log(resultData);
//           this.toast.success({
//             detail: "success message",
//             summary: "Student registered successfully",
//             duration: 5000,
//           });
//           this._dialogRef.close(true);
//         },
//         (error) => {
//           console.error(error);
//           this.toast.error({
//             detail: "error message",
//             summary: "Registration failed try again later!",
//             duration: 5000,
//           });
//         }
//       );
//     }
//   }
  
// }

