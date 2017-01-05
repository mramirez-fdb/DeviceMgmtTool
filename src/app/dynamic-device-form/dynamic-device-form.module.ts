import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DynamicDeviceFormComponent } from './dynamic-device-form.component';
import{DynamicDeviceFormFieldComponent} from "./dynamic-device-form-field.component";
import{SharedModule} from "../shared/shared.module";//Shared features modules must be imported by any module expecting to use it's declarables.

@NgModule({
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule,SharedModule
  ],
  exports: [DynamicDeviceFormComponent],
  declarations: [DynamicDeviceFormComponent, DynamicDeviceFormFieldComponent]
})
export class DynamicDeviceFormModule { }
