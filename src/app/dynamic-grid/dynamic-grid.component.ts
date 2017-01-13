import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'dynamic-grid',
  templateUrl: './dynamic-grid.component.html',
  styleUrls: ['./dynamic-grid.component.scss']
})
export class DynamicGridComponent implements OnInit {
public cols: string[] = new Array();
@Input() items: any[];
@Input() fieldName: string;

  constructor() { 
    
  }
  
  ngOnInit() {
    if(this.items != null && this.items.length > 0)
    this.cols = Object.keys(this.items[0]);
  }

}
