# CSVtoJSONLibrary

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.5.

![CSV Format](https://img.icons8.com/officel/48/000000/csv.png "CSV Format") => ![JSON Format](https://img.icons8.com/office/48/000000/json.png "JSON Format")

## Step - 1

> npm i ngx-csvto-json --save 
[NPM Package Link](https://www.npmjs.com/package/ngx-csvto-json "ngx-csvto-json")\

import NgxCSVtoJSONModule in **app.module.ts** file.  
**app.module.ts**
```javascript
import {NgxCSVtoJSONModule} from 'ngx-csvto-json';
 imports: [
    NgxCSVtoJSONModule
  ]
  ```

## Step - 2
Use selector **"Ngx-CSVtoJSON"** to use the converter component  
**Note**: This component can emit two events "onConvert" and "onFail"  
Bind those event in **app.component.ts** file with user defined functions and process the result  
**app.component.ts**
 ```javascript
 convert(objArray){
   console.log(objArray);
  }
  onError(err){
    console.log(err);
  }
```
**app.component.html**
```html
<Ngx-CSVtoJSON (onConvert)="convert($event)" (onFail)="onError($event)"></Ngx-CSVtoJSON>
```

## CONVERTED RESULT FORMAT
Result format will be in 
```javascript
finalobj= {
 properties: [],
 result: []
};
```
> That's it you are good to go. Happy Coding :)

