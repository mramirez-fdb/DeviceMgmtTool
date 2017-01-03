import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DynamicDeviceFormComponent } from './dynamic-device-form.component';
import{DynamicDeviceFormFieldComponent} from "./dynamic-device-form-field.component";

@NgModule({
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule
  ],
  exports: [DynamicDeviceFormComponent],
  declarations: [DynamicDeviceFormComponent, DynamicDeviceFormFieldComponent]
})
export class DynamicDeviceFormModule { }
