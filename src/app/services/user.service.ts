import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) {}
  
  updateUser(id: number, data: any): Observable<any> {
    return this.http.put(`http://127.0.0.1:9000/students/${id}`, data);
  }

  deleteStudent(studentId: string) {
    const url = `http://127.0.0.1:9000/students/${studentId}`;
    return this.http.delete(url);
  }
  updateStudent(studentId: string, studentData: any): Observable<any> {
    const url = `http://127.0.0.1:9000/students/${studentId}`;
    return this.http.put(url, studentData);
  }
  addUser(bodyData: any): Observable<any> {
    const url = 'http://127.0.0.1:9000/student/create';
    return this.http.post(url, bodyData);
  }
}
