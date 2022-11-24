import { Component, VERSION } from '@angular/core';
import { hasExplicitConstructor } from '@angular/core/schematics/utils/typescript/class_declaration';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  displayName = 'USER';

  constructor(){

  }
}
