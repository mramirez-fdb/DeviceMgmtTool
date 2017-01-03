import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { DeviceFieldBase } from "./device-field-base";

@Component({
   // moduleId: module.id,
    selector: 'df-field',
    templateUrl: './dynamic-device-form-field.component.html',
    styleUrls: ['./dynamic-device-form-field.component.scss'],
})
export class DynamicDeviceFormFieldComponent implements OnInit {
    @Input() field: DeviceFieldBase<any>;
    @Input() form: FormGroup;
    get isValid() { return this.form.controls[this.field.nm].valid; }
    constructor() { }

    ngOnInit() { }
}