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
    path: '',
    component: DashboardComponent,
    children:[
      {
        path: '',
        pathMatch: 'prefix',
        redirectTo: ''
      },
      {
        path: '',
        component: ContentComponent,
        children:[
          {
            path: '',
            pathMatch: 'prefix',
            redirectTo: 'home'
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
