import { Component } from '@angular/core';

@Component({
  selector: 'csv-json-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'CSVtoJSONLibrary';
  
 
  convert(objArray){
   console.log(objArray);
  }
  onError(err){
    console.log(err);
  }
}
