import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DataTablesModule } from "angular-datatables";
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { PreloaderComponent } from './pages/dashboard/sections/preloader/preloader.component';
import { ContentComponent } from './pages/dashboard/sections/content/content.component';
import { ControlbarComponent } from './pages/dashboard/sections/controlbar/controlbar.component';
import { FootComponent } from './pages/dashboard/sections/foot/foot.component'
import { AsideComponent } from './pages/dashboard/sections/aside/aside.component';
import { NavbarComponent } from './pages/dashboard/sections/navbar/navbar.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/dashboard/sections/content/home/home.component';
import { TablesComponent } from './components/tables/tables.component';
import { ChartsComponent } from './components/charts/charts.component';
import { HttpClientComponent } from './components/http-client/http-client.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    PreloaderComponent,
    ContentComponent,
    ControlbarComponent,
    FootComponent,
    AsideComponent,
    NavbarComponent,
    LoginComponent,
    HomeComponent,
    TablesComponent,
    ChartsComponent,
    HttpClientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DataTablesModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
