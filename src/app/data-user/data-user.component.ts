import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialogRef } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-data-user',
  templateUrl: './data-user.component.html',
  styleUrls: ['./data-user.component.css']
})
export class DataUSERComponent implements OnInit {
  students: any[] = [];
  constructor(private http: HttpClient,public dialog: MatDialog) { }

  ngOnInit() {
    this.http.get<any[]>('http://127.0.0.1:9000/students').subscribe(
      (data) => {
        this.students = data;
      },
      (error) => {
        console.error(error);
      }
    );
  }
  onClickDelete(studentId: string) {
    const confirmDelete = confirm('Êtes-vous sûr de vouloir supprimer cet utilisateur ?');
    if (confirmDelete) {
      const url = `http://127.0.0.1:9000/students/${studentId}`;
      this.http.delete(url).subscribe(
        (response) => {
          console.log('Student deleted successfully:', response);
          // Add your code to update the list of students here
        },
        (error) => {
          console.error('Error deleting student:', error);
        }
      );
    }
  }
  
  
    
}
