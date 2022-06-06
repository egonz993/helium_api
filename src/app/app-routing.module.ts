import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ContentComponent } from './pages/dashboard/sections/content/content.component';
import { HomeComponent } from './pages/dashboard/sections/content/home/home.component';
import { LoginComponent } from './pages/login/login.component';

const routes:Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children:[
      {
        path: '',
        pathMatch: 'prefix',
        redirectTo: 'content'
      },
      {
        path: 'content',
        component: ContentComponent,
        children:[
          {
            path: '',
            pathMatch: 'prefix',
            redirectTo: 'gateways-status'
          },
          {
            path: 'home',
            component: HomeComponent
          }
        ]
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
