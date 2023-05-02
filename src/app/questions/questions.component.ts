import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  questions: any[] = [];

  constructor(private userService:UserService) { }

  ngOnInit(): void {
    
      this.userService.getQuestions().subscribe(data => {
        this.questions = data;
      });
      // this.userService.getReponse().subscribe(data => {
      //   this.questions = data;
      // });
    
  }
  onClickDelete(questionId: string) {
    const confirmDelete = confirm('Are you sure you want to delete this question ?');
    if (confirmDelete) {
      this.userService.deleteQuestion(questionId).subscribe(
        (response) => {
          console.log('Question deleted successfully:', response);
          this.ngOnInit();
          // Add your code to update the list of students here
        },
        (error) => {
          console.error('Error deleting question:', error);
        }
      );
    }
  }
}
