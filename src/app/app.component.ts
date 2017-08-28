///<reference path="../../node_modules/@angular/core/src/metadata/directives.d.ts"/>
///<reference path="products/product.service.ts"/>
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
import {ProductService} from './products/product.service';
@Component({
    selector: 'pm-root',
    template: `
        <div>
            <pm-products></pm-products>
        </div>
    `,
    providers: [ ProductService ]
})
export class AppComponent {
  pageTitle: string = 'me here';
}
