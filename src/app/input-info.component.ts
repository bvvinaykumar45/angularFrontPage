import { Component } from '@angular/core';
import { DataHolderService } from './data-holder.service';
import { Router } from '@angular/router';

@Component({
  selector: 'input-info',
  templateUrl: 'input-info.component.html',
  styles: [
    `
  label{
    font-weight:bold;
  }
  em{
     color:#E05C65; padding-left:10px;
  }
  `,
  ],
})
export class InputInfoComponent {
  constructor(private dataHolder: DataHolderService, private router: Router) {}
  id;
  firstName;
  lastName;
  gender = 'none';
  email;
  phoneNo;

  addData(formValues) {
    this.dataHolder.addData(formValues);
    alert('Data has been added successfully');
    this.router.navigate(['data-display']);
  }

  clearForm() {
    if (confirm('Are you sure to clear form?')) {
      this.id = undefined;
      this.firstName = '';
      this.lastName = '';
      this.gender = 'none';
      this.email = '';
      this.phoneNo = '';
    }
  }
}
