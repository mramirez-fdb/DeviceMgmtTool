import { Component, OnInit, AfterViewInit, AfterContentInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { DeviceQueueDevice } from "../models/device-queue-device"
import { DbContextLocale } from "../models/db-context-locale.enum";
import { LbldMedDeviceEditFormComponent } from "../lbld-med-device-edit-form/lbld-med-device-edit-form.component";
@Component({
  selector: 'kendo-grid-edit-dialog',
  templateUrl: './kendo-grid-edit-dialog.component.html',
  styleUrls: ['./kendo-grid-edit-dialog.component.scss']
})
export class KendoGridEditDialogComponent implements OnInit, AfterViewInit, AfterContentInit {
  deviceSummaryDataItem;
  editForm;
  dbContextLocale: DbContextLocale = DbContextLocale.Working;
  @Input() public set model(deviceSummary: DeviceQueueDevice) {
    this.deviceSummaryDataItem = deviceSummary;
    deviceSummary === undefined ? this.active = false : this.active = true;
  }

  @Output() cancel: EventEmitter<any> = new EventEmitter();
  @Output() save: EventEmitter<any> = new EventEmitter();

  @ViewChild(LbldMedDeviceEditFormComponent)
  protected deviceEditFormComponent: LbldMedDeviceEditFormComponent;

  constructor() {

  }

  ngOnInit() {

  }
  ngAfterViewInit() {

  }
  ngAfterContentInit(){

  }

  public active: boolean = false;

  public onSave(): void {
    //this.save.emit(this.deviceSummaryDataItem);
    this.deviceEditFormComponent.onSave();
    //should not close automatically because save may be unsuccessful so
    //save must report this to this form on whether to close or not
    //this.active = false;
    //return false;
  }
  public onCancel(): void {
    this.deviceEditFormComponent.onCancel();
    this.active = false;

    //this.cancel.emit(undefined);
    //return false;
  }


}
