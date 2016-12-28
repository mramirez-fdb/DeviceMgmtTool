import { Component, OnInit, VERSION } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
 title: string;
 ang2Version: string;
  constructor() {
    this.ang2Version = JSON.stringify(VERSION);
   }

  ngOnInit() {
  }
public listItems: Array<{text: string, value: number}> = [{text: "Foo", value: 3},
{text: "Bar", value: 5},{text: "Baz", value: 7}];

  onButtonClick() {
        this.title = 'Hello from Kendo UI!';
      }
}
