import { Component, OnInit, ElementRef, Renderer, OnDestroy } from '@angular/core';
//cant find and no doc online: import { KendoButtonService } from '@progress/kendo-angular-buttons/button.service';
import { ButtonsModule, Button } from '@progress/kendo-angular-buttons';
@Component({
  selector: 'fdb-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit { // extends Button

  constructor(){ //(element: ElementRef, renderer: Renderer, service: KendoButtonService) {
   // super(element, renderer, service);
  }

  ngOnInit() {
  }

}
