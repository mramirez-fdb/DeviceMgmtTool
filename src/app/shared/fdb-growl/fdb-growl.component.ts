import { Component, OnInit, Input, AfterViewInit, OnChanges, ElementRef, IterableDiffers } from '@angular/core';
import { GrowlModule, Growl } from "primeng/primeng";
import { DomHandler } from "primeng/components/dom/domhandler"
import { FdbNotificationMessage } from "./fdb-notification-message";
@Component({
  selector: 'fdb-growl',
  templateUrl: './fdb-growl.component.html',
  styleUrls: ['./fdb-growl.component.scss']
})
export class FdbGrowlComponent implements OnInit, AfterViewInit, OnChanges { //extends Growl
  @Input() isSticky: boolean = false;
  @Input() lifeInMilliseconds: number = 5000;
  @Input() messages: FdbNotificationMessage[];
  //again component inheritance did not work for me.  the child eats the parent's decorator metadata and then
  //all sorts of things go wrong.  solution would be to copy the parent components template and put it in this component's
  //template which is just stupid: https://github.com/angular/angular/issues/7968#issuecomment-252719630
  /*constructor(elemRef: ElementRef, domHandler: DomHandler, iterableDiffers: IterableDiffers) { 
    super(elemRef, domHandler, iterableDiffers);
    this.timeout = 5000;
    this.zIndex = 10100;
  }*/


  ngOnInit() {

  }
  ngAfterViewInit() {
    //this.container = <HTMLDivElement> this.containerViewChild.nativeElement;
  }

  ngOnChanges() {

  }

}
