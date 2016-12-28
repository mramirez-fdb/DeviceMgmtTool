import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeviceQueueComponent } from './device-queue.component';
import{DeviceQueueDeviceComponent} from "../device-queue-device/device-queue-device.component";
const routes: Routes = [
  { path: 'device-queue/:id', component: DeviceQueueDeviceComponent },
 
  {
    path: 'device-queue',
    component: DeviceQueueComponent,
    data: {
      title: 'Device Queue'
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeviceQueueRoutingModule { }

export const routedComponents = [DeviceQueueDeviceComponent, DeviceQueueComponent];