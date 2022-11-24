import { Component, OnInit } from '@angular/core';
import { DataHolderService } from './data-holder.service';

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
  constructor(private dataHolder: DataHolderService) {}

  ngOnInit() {
    this.data = this.dataHolder.getData();
  }

  editData(id){
    
  }
}

