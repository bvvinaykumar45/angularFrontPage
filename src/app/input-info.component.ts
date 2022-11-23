import { Component } from '@angular/core';
import { DataHolderService } from './data-holder.service';

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
  constructor(private dataHolder: DataHolderService){

  }
  firstName
  lastName
  gender='none'
  email
  phoneNo
  
  addData(formValues){
    this.dataHolder.addData(formValues)
    alert('Data has been added successfully')
  }

  clearAllData(){
    if(confirm('Are you sure to clear all data?')){
      this.dataHolder.clearData();
      this.firstName='';
      this.lastName='';
      this.gender='none';
      this.email='';
      this.phoneNo='';
    }
    
  }
}
