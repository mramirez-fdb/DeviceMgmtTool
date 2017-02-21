import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//Import Kendo Grid
import {GridModule} from "@progress/kendo-angular-grid";
import { DialogModule } from '@progress/kendo-angular-dialog';
import { DeviceQueueComponent }   from './device-queue.component';
import {DeviceQueueDeviceComponent} from "../device-queue-device/device-queue-device.component";
import{DeviceQueueRoutingModule, routedComponents} from "./device-queue.routing";
import { ResolveDeviceDialogComponent } from '../resolve-device-dialog/resolve-device-dialog.component';

@NgModule({
    imports: [BrowserModule, DeviceQueueRoutingModule,FormsModule, ReactiveFormsModule,
    GridModule, DialogModule],
    exports: [],
    declarations: [routedComponents, DeviceQueueComponent, DeviceQueueDeviceComponent, ResolveDeviceDialogComponent],
    providers: [],
})
export class DeviceQueueModule { }
