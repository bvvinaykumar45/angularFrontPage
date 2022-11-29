import {Injectable} from '@angular/core';

@Injectable()
export class DataHolderService{
  constructor(){

  }


  getData(){
    return perInfo
  }

  getDataById(id:number){
    return perInfo.find(element => element.id === id)
  }

  addData(formValues){
    formValues.id = i++
    perInfo.push(formValues)
  }

  editData(formValues){
    console.log(formValues)
    var editValue = perInfo.find(element => element.id === formValues.id)
    const index:number = perInfo.indexOf(editValue)
    if(index!==-1){
      perInfo[index] = formValues;
    }
  }

  clearData(){
    while(!!perInfo.length){
      perInfo.pop()
    }
  }

  loggedin(){
    let log:boolean;
    log = !loggedin;
    return log;
  }
  
}

  let loggedin:boolean = true;
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