import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataHolderService } from './data-holder.service';


@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styles: [
    `
    body{
      text-align:center;
    }
    form{
      display:inline-block;
    }
  label{
    float:left;
    font-weight:bold;
  }
  em{
    float:right;
    color:red;
  }
  `,
  ],
})
export class LoginComponent {
  constructor(private router: Router, private dataHolder:DataHolderService) {}

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

  username: string;
  password;
  authenticate(loginForm) {
    var authentication: boolean = false;
    this.logindetails.forEach((element) => {
      if (
        loginForm.username === element.username &&
        loginForm.password === element.password
      ) {
        this.router.navigate(['data-display']);
        authentication = true;
        this.dataHolder.loggedin();
      }
    });
    if (!authentication) {
      alert('Invalid Credentials');
      this.username = '';
      this.password = '';
    }
  }
}

export interface ILogin {
  username: string;
  password: string;
}
