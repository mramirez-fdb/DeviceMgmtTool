import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeviceQueueComponent } from './device-queue.component';
import{DeviceQueueDeviceComponent} from "../device-queue-device/device-queue-device.component";
import {AuthGuardService} from "../services/auth-guard.service";
const routes: Routes = [
  { path: 'device-queue/:id', component: DeviceQueueDeviceComponent },
 
  {
    path: 'device-queue',
    component: DeviceQueueComponent,
    data: {
      title: 'Device Queue'
    },
    canActivate:[AuthGuardService]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeviceQueueRoutingModule { }

export const routedComponents = [DeviceQueueDeviceComponent, DeviceQueueComponent];