import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DataUSERComponent } from './data-user/data-user.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormationComponent } from './formation/formation.component';
import { EspaceComponent } from './espace/espace.component';
import { QuestionsComponent } from './questions/questions.component';
import { EditQuestionComponent } from './edit-question/edit-question.component';
import { AddReponseComponent } from './add-reponse/add-reponse.component';
// import { ChattingComponent } from './chatting/chatting.component';
const routes: Routes = [
  {
    path:'',
    component:LoginComponent
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'register',
    component: RegisterComponent
  },
  {
    path:'data-user',
    component: DataUSERComponent
  },
  {
    path:'sidebar',
    component:SidebarComponent
  },
  {
  path:'dashboard',
  component:DashboardComponent
  },
  {
    path:'formation',
    component:FormationComponent
    },
    {
      path:'question-reponse',
      component:EspaceComponent
    },
    {
      path:'question',
      component:QuestionsComponent
    },
    { path: 'edit-question/:id',
     component: EditQuestionComponent },
     { path: 'add-reponse/:id',
     component: AddReponseComponent }

  // {
  //   path:'chatting',
  //   component:ChattingComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
