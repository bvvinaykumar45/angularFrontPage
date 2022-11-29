import { Component, OnInit } from '@angular/core';
import { DataHolderService } from './data-holder.service';
import { Router }  from '@angular/router';

@Component({
  selector: 'data-display',
  templateUrl: './data-display.component.html',
  styles: [
    `
    .nodata-found{
      background-color:#FFF000;text-align:center;
      font-weight:bold;
      color:#AF0000;
    }
    `,
  ],
})
export class DataDisplayComponent implements OnInit {
  data: any[];
  constructor(private dataHolder: DataHolderService, private router:Router) {}

  ngOnInit() {
    this.data = this.dataHolder.getData();
  }

  editData(id){
    this.router.navigate(['edit-info',id])
  }

  clearAllData(){
    if(confirm('Are you sure to clear all data?')){
      this.dataHolder.clearData();
    }
  }
}

