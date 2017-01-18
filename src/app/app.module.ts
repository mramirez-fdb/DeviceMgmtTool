//CommonModule vs BrowserModule http://stackoverflow.com/questions/40096647/cant-bind-to-ngif-since-it-isnt-a-known-property-of-md-card-title
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//http://stackoverflow.com/questions/39152071/cant-bind-to-formgroup-since-it-isnt-a-known-property-of-form
//import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

// Import ButtonsModule
import { ButtonsModule } from '@progress/kendo-angular-buttons';
// Import DropDownsModule
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
//Import Kendo Grid
//import {GridModule} from "@progress/kendo-angular-grid";
//import { DialogModule } from '@progress/kendo-angular-dialog';
import { DeviceQueueComponent } from './device-queue/device-queue.component';
import { DeviceQueueDeviceComponent } from './device-queue-device/device-queue-device.component';
import { HomeComponent } from './home/home.component';
//now imported in FdbDevicesModule import { KendoGridEditDialogComponent } from './kendo-grid-edit-dialog/kendo-grid-edit-dialog.component';
//now imported in FdbDevicesModule import { LbldMedDeviceEditFormComponent } from './lbld-med-device-edit-form/lbld-med-device-edit-form.component';
//now imported in FdbDevicesModule import { FdbDevicesComponent } from './fdb-devices/fdb-devices.component';
import { AppRoutingModule, routedComponents, authProviders } from './app-routing.module';
import {SharedModule} from "./shared/shared.module";
import{FdbDevicesModule} from "./fdb-devices/fdb-devices.module";
import{DeviceQueueModule} from "./device-queue/device-queue.module";
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';
import { LoginComponent } from './login/login.component';
import{AuthService} from "./services/auth.service";
import { AuthDashboardTesterComponent } from './auth-dashboard-tester/auth-dashboard-tester.component';

@NgModule({
  imports: [
    BrowserModule,
    //FormsModule,
    //ReactiveFormsModule,
    HttpModule,
    //RouterModule.forRoot(appRoutes), //replaced with code in AppRoutingModule because styleguide says to have separate routing.module files
    AppRoutingModule,
    SharedModule, //the "shared features" concept via john papa(good for possibly having these common kendo widgets)
    FdbDevicesModule, //now fdb-devices component is under a feature module FdbDevicesModule which also imports FdbDevicesRoutingModule to configure routing
    DeviceQueueModule,
    // And register it
           ButtonsModule,
           DropDownsModule,
           //GridModule,
           //DialogModule
  ],
  declarations: [
    AppComponent,
    //moved these "routed" components into the app-routing.module and exported the Component array variable routedComponents instead
    //DeviceQueueComponent,
    //DeviceQueueDeviceComponent,
   // HomeComponent,
  //moved to FdbDevicesModule because fdbdevicescomponent uses it  KendoGridEditDialogComponent,
  //moved to FdbDevicesModule because fdbdevicescomponent uses it  LbldMedDeviceEditFormComponent,
   // FdbDevicesComponent
   routedComponents,
    UnauthorizedComponent,
    LoginComponent,
    AuthDashboardTesterComponent
  ],
  providers: [authProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
