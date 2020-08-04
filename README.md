# CSVtoJSONLibrary

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.5.

![CSV Format](https://img.icons8.com/officel/48/000000/csv.png "CSV Format") to ![JSON Format](https://img.icons8.com/office/16/000000/json.png "JSON Format")

## Step - 1

> npm i ngx-csvto-json --save
[NPM Package Link](https://www.npmjs.com/package/ngx-csvto-json "ngx-csvto-json")

Import NgxCSVtoJSONModule in "app.module.ts" file.
import {NgxCSVtoJSONModule} from 'ngx-csvto-json';
 imports: [
    NgxCSVtoJSONModule
  ]

## Step - 2
Use selector **"Ngx-CSVtoJSON"** to use the converter component [**Note**: This component can emit two events "onConvert" and "onFail"]
Bind those event in **app.component.ts** file with user defined functions and process the result.
app.component.ts
  convert(objArray){
   console.log(objArray);
  }
  onError(err){
    console.log(err);
  }
<Ngx-CSVtoJSON (onConvert)="convert($event)" (onFail)="onError($event)"></Ngx-CSVtoJSON>

## Step - 3
Result format will be in 
onConvert => 
{
 properties: [],
 result: []
}

