import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styles: [
    `
  label{
    font-weight:bold;
  }
  `,
  ],
})
export class LoginComponent {
  constructor(private router: Router) {}

  logindetails: ILogin[] = [
    {
      username: 'bingvenk',
      password: 'Nov@2022',
    },
    {
      username: 'ganshash',
      password: 'QwertyKey',
    },
  ];

  authenticate(loginForm) {
    this.logindetails.forEach((element) => {
      if (
        loginForm.username === element.username &&
        loginForm.password === element.password
      ) {
        return;
      }
    });
  }
}

export interface ILogin {
  username: string;
  password: string;
}
