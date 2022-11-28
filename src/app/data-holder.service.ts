import {Injectable} from '@angular/core';

@Injectable()
export class DataHolderService{
  constructor(){

  }

  getData(){
    return perInfo
  }

  getDataById(id:number){
    return perInfo.filter((element)=>element.id === id)
  }

  addData(formValues){
    formValues.id = i++
    perInfo.push(formValues)
  }

  clearData(){
    while(!!perInfo.length){
      perInfo.pop()
    }
  }
  
}
  let i =1;

  var perInfo:PersonalInfo[]

  perInfo = []

  export interface PersonalInfo{
    id:number;
    firstName:string;
    lastName:string;
    gender: string;
    email: string;
    phoneNo: number;
  }