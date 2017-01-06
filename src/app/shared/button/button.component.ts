import { Component, OnInit,AfterContentInit,ContentChild,Input, Output, EventEmitter, ElementRef} from '@angular/core';  // ElementRef, Renderer, OnDestroy
//cant find and no doc online: import { KendoButtonService } from '@progress/kendo-angular-buttons/button.service';
//import { ButtonsModule, Button } from '@progress/kendo-angular-buttons';
@Component({
  selector: 'fdb-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit, AfterContentInit { // extends Button
//couldn't do component inheritance(introduced in angular 2.3) on KendoButton 
//(Button is alias of ButtonDirective in the @progress/kendo-angular-buttons package) because kendo sucks.  
//They didn't make KendoButtonService service visible to the outside so
//therefore could not provide the right parameters to the super() constructor
//constructor(element: ElementRef, renderer: Renderer, service: KendoButtonService) {// super(element, renderer, service);}
  //more info on component inheritance https://scotch.io/tutorials/component-inheritance-in-angular-2
  //and here on all the new stuff in version 2.3 https://medium.com/@gerard.sans/angular-2-new-features-in-angular-2-3-f2e73f16a09e#.yonjr8qy2
  @Input() isPrimaryColorScheme: Boolean = true;

  @Input() isInSelectedState: Boolean = true;

  @Input() tabIndex: number;

  @Input() isTogglableStyle: Boolean;

  @Input() isDisabled: Boolean;

  @Input() themeIcon: String;

  @Input() iconClass: String;

  @Input() imageUrl: String;

  @Input() buttonText: String;

  @Output() click = new EventEmitter<Event>();
  
  @ContentChild(String) text;
  constructor(public elementRef:ElementRef){ 
  
  }

  onButtonClick(e){
    console.log("kendo button click going through the wrapper component")
    this.click.emit(e);
  }

  ngOnInit() {
  }
  ngAfterContentInit(){
    //the reason we are able to fetch the innerText here in this lifecycle hook
    //is because we have defined <ng-content></ng-content> inside of the
    //<button> element in the button.component.html file
   var innerText = this.elementRef.nativeElement.innerText;
  }

}
