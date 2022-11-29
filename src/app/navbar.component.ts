import { Component } from '@angular/core';
import { Data } from '@angular/router';
import { DataHolderService } from './data-holder.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  username: any;
  constructor(private dataHolder: DataHolderService) {}
  logout() {
    this.dataHolder.loggedin();
  }

  loggedin = this.dataHolder.loggedin();
}
