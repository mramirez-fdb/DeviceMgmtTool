import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import{DeviceFieldBase} from "./device-field-base";

@Injectable()
export class DeviceFieldService {

  constructor() { }

  toFormGroup(fields: DeviceFieldBase<any>[]){
    let group: any ={};
    fields.forEach(field => {
      group[field.nm] = field.required ? new FormControl(field.value || '', Validators.required)
                                       : new FormControl(field.value || '');
    });
    return new FormGroup(group);
  }
}
