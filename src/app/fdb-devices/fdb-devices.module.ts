import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
//Import Kendo Grid
import {GridModule} from "@progress/kendo-angular-grid";
import { DialogModule } from '@progress/kendo-angular-dialog';
import {LbldMedDeviceService} from "../services/lbld-med-device.service";
import{FdbDevicesRoutingModule, routedComponents} from "./fdb-devices.routing";
import { FdbDevicesComponent }   from './fdb-devices.component';
import { KendoGridEditDialogComponent } from '../kendo-grid-edit-dialog/kendo-grid-edit-dialog.component';
import { LbldMedDeviceEditFormComponent } from '../lbld-med-device-edit-form/lbld-med-device-edit-form.component';
import{DynamicDeviceFormModule} from "../dynamic-device-form/dynamic-device-form.module";
import{SharedModule} from "../shared/shared.module";//Shared features modules must be imported by any module expecting to use it's declarables.

@NgModule({
    //Modules do no inherit each other, so even though the FdbDevicesModule is going to be 
    //imported by the AppModule (which imports the SharedModule already), 
    //the FdbDevicesModule cannot access the shared features ... unless we import SharedModule
    imports: [FdbDevicesRoutingModule,  
    FormsModule, ReactiveFormsModule,
    GridModule, DialogModule,
   DynamicDeviceFormModule, SharedModule],
    exports: [],
    declarations: [routedComponents, FdbDevicesComponent, 
    KendoGridEditDialogComponent,LbldMedDeviceEditFormComponent],
    providers: [LbldMedDeviceService], //When we provide a service in a feature module that is eagerly loaded by our app's root module, it is available for everyone to inject.
})
export class FdbDevicesModule { }
