import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { DeviceFieldBase } from "./device-field-base";
import { DeviceFieldService } from "./device-field.service";
@Component({
  selector: 'dynamic-device-form',
  templateUrl: './dynamic-device-form.component.html',
  styleUrls: ['./dynamic-device-form.component.scss'],
  providers: [DeviceFieldService]
})
export class DynamicDeviceFormComponent implements OnInit {


  @Input() fields: DeviceFieldBase<any>[] = [];
  form: FormGroup;
  payLoad = '';
  constructor(private deviceFieldService: DeviceFieldService) {
    
   }

  ngOnInit() {
    this.form = this.deviceFieldService.toFormGroup(this.fields);
  }
  onSubmit() {
    this.payLoad = JSON.stringify(this.form.value);
  }

}
