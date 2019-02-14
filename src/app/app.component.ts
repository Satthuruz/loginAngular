import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Users}  from './models/users';
import { Http } from '@angular/http';
import { runInThisContext } from 'vm';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'INPSERCOM';


  constructor(private router: Router){
    
  }

  logout(){
    localStorage.removeItem('email');
    this.router.navigate(['']);
  }

  logIn(){
    this.router.navigate(['/login']);
  }
}
