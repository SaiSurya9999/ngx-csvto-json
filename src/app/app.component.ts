import { Component } from '@angular/core';

@Component({
  selector: 'csv-json-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'CSVtoJSONLibrary';
  testArray:any = [];
  term:any = "";
  prop:any = "";
 
  convert(objArray){
   console.log(objArray);
   for(let k=0; k<objArray.result.length; k++){
     let obj = {
       name: objArray.result[k]["Name"] ,
       phno: objArray.result[k]["Phone1-Value"]
     }
    
    this.testArray.push(obj);
   }
  }
  onError(err){
    console.log(err);
  }
}
