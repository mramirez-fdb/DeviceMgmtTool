import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FdbDevicesComponent } from './fdb-devices.component';

const routes: Routes = [
  { path: 'fdb-devices',
    component: FdbDevicesComponent,
    data: {
      title: 'Fdb Devices'
    } },
    { path: 'fdb-devices/:id',
    component: FdbDevicesComponent,
    data: {
      title: 'Fdb Devices'
    } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)], //.forChild() here and not .forRoot() because forRoot() is only for the app's root module
  exports: [RouterModule],
})
export class FdbDevicesRoutingModule { }

export const routedComponents = [FdbDevicesComponent];