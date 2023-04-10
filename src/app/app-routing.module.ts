import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DataUSERComponent } from './data-user/data-user.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
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
