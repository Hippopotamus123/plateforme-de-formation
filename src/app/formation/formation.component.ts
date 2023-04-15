import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { MatDialog } from '@angular/material/dialog';

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
}
