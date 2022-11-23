import {Injectable} from '@angular/core';

@Injectable()
export class DataHolderService{
  constructor(){

  }

  getData(){
    return perInfo
  }

  addData(formValues){
    perInfo.push(formValues)
  }

  clearData(){
    while(!!perInfo.length){
      perInfo.pop()
    }
  }
  
}

  var perInfo:PersonalInfo[]

  perInfo = []

  interface PersonalInfo{
    firstName:string;
    lastName:string;
    gender: string;
    email: string;
    phoneNo: number;
  }