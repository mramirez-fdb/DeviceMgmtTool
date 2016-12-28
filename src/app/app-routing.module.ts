import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import {DeviceQueueDeviceComponent} from "./device-queue-device/device-queue-device.component";
//import{DeviceQueueComponent} from "./device-queue/device-queue.component";
//import{FdbDevicesComponent} from "./fdb-devices/fdb-devices.component";
import{HomeComponent} from "./home/home.component";

const appRoutes: Routes = [
  // { path: 'device-queue/:id', component: DeviceQueueDeviceComponent },
 
  // {
  //   path: 'device-queue',
  //   component: DeviceQueueComponent,
  //   data: {
  //     title: 'Device Queue'
  //   }
  // },
  // {
  //   path: 'fdb-devices',
  //   component: FdbDevicesComponent,
  //   data: {
  //     title: 'Fdb Devices'
  //   }
  // },
  { path: '', redirectTo: "/home", pathMatch: 'full' }, //nothing to show in home so redirect to this route on default route
  {path: "home", component: HomeComponent}
  //{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }

//https://github.com/johnpapa/angular2-tour-of-heroes/blob/master/app/app-routing.module.ts
export const routedComponents = [  HomeComponent]; //FdbDevicesComponent,   DeviceQueueDeviceComponent, DeviceQueueComponent,