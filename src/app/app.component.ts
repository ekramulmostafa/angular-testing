///<reference path="../../node_modules/@angular/core/src/metadata/directives.d.ts"/>
/*import { Component } from '@angular/core';

@Component({
  selector: 'pm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular: Getting Started';
}*/
import {Component} from '@angular/core';
@Component({
    selector: 'pm-root',
    template: `
        <div>{{pageTitle}}</div>
        <div>
            <pm-products></pm-products>
        </div>
    `
})
export class AppComponent {
  pageTitle: string = 'me here';
}
