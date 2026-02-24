import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  styleUrls: ['./login.component.scss'],
  template: `
  <h1>Login</h1>
  <input placeholder="Usuario" #user>
  <input type="password" placeholder="Password" #pass>
  <button (click)="login()">Login</button>
`
})
export class LoginComponent {

  constructor(private authService: AuthService) {}

  login() {
  this.authService.login('admin', '1234')
    .subscribe(response => {
      if (response.success) {
        console.log('Login correcto');
      }
    });
}

}
