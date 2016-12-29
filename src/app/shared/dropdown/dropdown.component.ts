import { Component, OnInit, AfterContentInit,AfterViewInit, ContentChild, ViewChild,Input, Output, EventEmitter, ElementRef } from '@angular/core';
import { DropDownsModule, DropDownListComponent } from '@progress/kendo-angular-dropdowns';

@Component({
  selector: 'fdb-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit, AfterContentInit, AfterViewInit {

  @Input() open: boolean;

  @Input() data: any;

  @Input() value: any;

  @Input() textField: string;

  @Input() valueField: string;

  @Input() popupSettings: {height: number, width: number} = {height: 200, width: 200};

  @Input() defaultItem: any;

  @Input() disabled: boolean = false;

  @Input() filterable: boolean = false;

  @Input() ignoreCase: boolean = false;

  @Input() delay: number;

  @Input() valuePrimitive: boolean;

  @Input() tabIndex: number = 0;

  @Output() valueChange = new EventEmitter<Event>();

  @Output() filterChange = new EventEmitter<Event>();

  @Output() selectionChange = new EventEmitter<Event>();
  /*itemTemplate: ItemTemplateDirective;
  valueTemplate: ValueTemplateDirective;
  headerTemplate: HeaderTemplateDirective;
  footerTemplate: FooterTemplateDirective;*/
  //filterInput: ElementRef;
 
  constructor(private elementRef: ElementRef) {

   }
   onValueChange(e){
      this.valueChange.emit(e);
   }

   onFilterChange(e){
      this.filterChange.emit(e);
   }

   onSelectionChange(e){
      this.selectionChange.emit(e);
   }

  ngOnInit() {
  }

  ngAfterContentInit() {

    var innerText = this.elementRef.nativeElement.innerText;
  }
  ngAfterViewInit(){

  }

}
