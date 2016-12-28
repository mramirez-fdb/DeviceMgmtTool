import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
 title: string;
  constructor() { }

  ngOnInit() {
  }
public listItems: Array<{text: string, value: number}> = [{text: "Foo", value: 3},
{text: "Bar", value: 5},{text: "Baz", value: 7}];

  onButtonClick() {
        this.title = 'Hello from Kendo UI!';
      }
}
