import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  


  constructor(private router: Router) {}

  ngOnInit(): void {
    // this.gotoRoute([''])
  }

  gotoRoute(params:any){
    this.router.navigate(params);
  }

}
