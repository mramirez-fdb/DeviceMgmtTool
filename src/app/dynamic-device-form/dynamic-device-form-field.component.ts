import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { DeviceFieldBase, FieldControlType, ServerSideDataType } from "./device-field-base";

@Component({
   // moduleId: module.id,
    selector: 'df-field',
    templateUrl: './dynamic-device-form-field.component.html',
    styleUrls: ['./dynamic-device-form-field.component.scss'],
})
export class DynamicDeviceFormFieldComponent implements OnInit {
    fieldControlType = FieldControlType;
    serverSideDataType = ServerSideDataType;
    @Input() field: DeviceFieldBase<any>;
    @Input() form: FormGroup;
    get isValid() { return this.form.controls[this.field.classPropertyName].valid; }
    constructor() {

     }

    ngOnInit() {
        
     }
     boolDropDownValueChanged(e){
         this.form.controls[this.field.classPropertyName].setValue(e);
         console.log("it worked! a tri-state bool changed value");
         console.log(e);
         
     }
}