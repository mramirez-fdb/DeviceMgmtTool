import { Component, OnInit,Input, ViewChild, AfterViewInit } from '@angular/core';
import{FormGroup, FormControlName} from "@angular/forms";
import{FieldReferenceValueMetadata, HttpRequestType} from "../../dynamic-device-form/device-field-base";
import{ComboBoxComponent} from "@progress/kendo-angular-dropdowns";
import {ReferenceListDataService} from "../../services/reference-list-data.service";
@Component({
  selector: 'referential-combobox',
  templateUrl: './referential-combobox.component.html',
  styleUrls: ['./referential-combobox.component.scss'],
  providers:[ReferenceListDataService]
})
export class ReferentialComboboxComponent implements OnInit, AfterViewInit {
data: Array<any>
textField: string;
valueField: string;
placeholder: string = "select...";
tabIndex: number = 1;
valuePrimitive: boolean = false;
disabled: boolean = false;
@Input() selectedObject: any;
@Input() allowCustom: boolean;
@Input() refMetadata: FieldReferenceValueMetadata;
@Input() filterable: boolean;

@ViewChild(ComboBoxComponent) comboBoxComponent: ComboBoxComponent;
  constructor(private refListDataService: ReferenceListDataService) { 

  }
 
  ngOnInit() {
    this.extractMetadata();
    this.getData();
  }
  ngAfterViewInit(){
   
 }
  getData(){
    this.data = new Array<any>();
    if(this.refMetadata.HttpRequestType === HttpRequestType.Get)
      this.refListDataService.getDataByGet(this.refMetadata)
    .subscribe((result: any) => {
      this.data = result;
    },
    error => { console.log(error); });
    else if(this.refMetadata.HttpRequestType === HttpRequestType.Post)
      this.refListDataService.getDataByPost(this.refMetadata, {})
      .subscribe((result: any) => {
        this.data = result;
      },
      error => { console.log(error); })
  }
  setValue(value: any){
   // this.comboBoxComponent.value
  }
  extractMetadata(){
    this.textField = this.refMetadata.DataTextFieldName;
    this.valueField = this.refMetadata.DataValueFieldName;
    //this.refMetadata.
  }
  selectionChangeHandler(e){

  }
  valueChangeHandler(e){

  }
  filterChangeHandler(e){

  }

}
