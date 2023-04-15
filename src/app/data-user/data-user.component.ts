import { Component, OnInit,ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { AddUpdateUserComponent } from './add-update-user/add-update-user.component';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { ModifierUserComponent } from './modifier-user/modifier-user.component';
import { UserService } from '../services/user.service';
 
// export interface PeriodicElement {
//   name: string;
//   position: number;
//   weight: number;
//   symbol: string;
// }


@Component({
  selector: 'app-data-user',
  templateUrl: './data-user.component.html',
  styleUrls: ['./data-user.component.css']
})


export class DataUSERComponent implements OnInit {
  // displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  displayedColumns: string[] = [ 'firstname','lastname', 'email', 'role','phoneNumber','action'];
  // dataSource = new MatTableDataSource(any);
  dataSource!: MatTableDataSource<any>;

  


  // students: any[] = [];
  constructor(private http: HttpClient,public _dialog: MatDialog,private userService: UserService) { }

  ngOnInit() {
    this.http.get<any[]>('http://127.0.0.1:9000/students').subscribe(
      (data) => {
        // this.students = data;
        this.dataSource = new MatTableDataSource(data);


      },
      (error) => {
        console.error(error);
      }
    );
  }
 
  onClickDelete(studentId: string) {
    const confirmDelete = confirm('Êtes-vous sûr de vouloir supprimer cet utilisateur ?');
    if (confirmDelete) {
      this.userService.deleteStudent(studentId).subscribe(
        (response) => {
          console.log('User deleted successfully:', response);
          this.ngOnInit();
          // Add your code to update the list of students here
        },
        (error) => {
          console.error('Error deleting student:', error);
        }
      );
    }
  }
  
  
 openAddEditUser(){
  const dialogRef= this._dialog.open(AddUpdateUserComponent);
  dialogRef.afterClosed().subscribe({
    next: (val) => {
      if (val) {
        this.ngOnInit();
      }
    },
  });
 } 
 openEditUser(data: any){
  const dialogRef= this._dialog.open(ModifierUserComponent ,{
    data,
  });
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.ngOnInit();
        }
      },
    });
  
  
 } 
 
applyFilter(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filterValue.trim().toLowerCase();
}
}
