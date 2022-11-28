import { Component, OnInit } from '@angular/core';
import { DataHolderService } from './data-holder.service';

@Component({
  selector:'edit-info',
  templateUrl: './edit-info.component.html'
})

export class EditInfoComponent implements OnInit{
  constructor(private dataholder:DataHolderService){

  }

  editInfo:any
  ngOnInit(){
    this.dataholder
  }
}