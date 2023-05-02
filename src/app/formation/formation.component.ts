import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { MatDialog } from '@angular/material/dialog';
import { AddFormationComponent } from './add-formation/add-formation.component';
import { EditFormationComponent } from './edit-formation/edit-formation.component';
@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.css']
})
export class FormationComponent implements OnInit {

  students: any[] = [];
  constructor(private http: HttpClient,public _dialog: MatDialog,private userService: UserService) { }

  ngOnInit() {
    this.http.get<any[]>('http://127.0.0.1:9000/formations').subscribe(
      (data) => {
        this.students = data;
        // this.dataSource = new MatTableDataSource(data);


      },
      (error) => {
        console.error(error);
      }
    );
  }
  onClickDelete(formationId: string) {
    const confirmDelete = confirm('Are you sure you want to delete this course ?');
    if (confirmDelete) {
      this.userService.deleteFormation(formationId).subscribe(
        (response) => {
          console.log('Formation deleted successfully:', response);
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
    const dialogRef= this._dialog.open(AddFormationComponent);
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.ngOnInit();
        }
      },
    });
   } 
   openEditUser(data: any){
    const dialogRef= this._dialog.open(EditFormationComponent ,{
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
}
