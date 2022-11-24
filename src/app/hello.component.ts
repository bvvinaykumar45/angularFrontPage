import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  template: `
  <div style="background-color:#EAD2A8; border-radius:5px; color:">
   <h1 style="text-align:center">Hello {{name}}!</h1>
  </div>
  `,
  styles: [`h1 { font-family: Lato; }`]
})
export class HelloComponent  {
  @Input() name: string;
}
