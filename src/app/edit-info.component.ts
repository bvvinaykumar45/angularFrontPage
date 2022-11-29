import { Component, OnInit } from '@angular/core';
import { DataHolderService } from './data-holder.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector:'edit-info',
  templateUrl: './edit-info.component.html',
  styles: [
    `
  label{
    font-weight:bold;
  }
  em{
     color:#E05C65; padding-left:10px;
  }
  `,
  ]
})

export class EditInfoComponent implements OnInit{
  constructor(private dataHolder:DataHolderService, private route:ActivatedRoute, private router:Router){

  }

  id
  firstName
  lastName
  gender
  email 
  phoneNo
  
  editInfo:any
  ngOnInit(){
    this.editInfo = this.dataHolder.getDataById(+this.route.snapshot.params['id'])
    this.id = this.editInfo.id
    this.firstName = this.editInfo.firstName
    this.lastName = this.editInfo.lastName
    this.gender = this.editInfo.gender
    this.email = this.editInfo.email
    this.phoneNo = this.editInfo.phoneNo
  }


  editData(formValues){
    this.dataHolder.editData(formValues)
    this.router.navigate(['data-display'])
  }

  cancel(){
    this.router.navigate(['data-display'])
  }
}