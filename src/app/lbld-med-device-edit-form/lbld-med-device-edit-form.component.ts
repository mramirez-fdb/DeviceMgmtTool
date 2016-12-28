
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { LbldMedDevice } from '../models/lbld-med-device';
import { DbContextLocale } from "../models/db-context-locale.enum";
import { LbldMedDeviceService } from "../services/lbld-med-device.service";
import { UserService } from "../services/user.service";
@Component({
  selector: 'lbld-med-device-edit-form',
  templateUrl: './lbld-med-device-edit-form.component.html',
  styleUrls: ['./lbld-med-device-edit-form.component.scss']
})
export class LbldMedDeviceEditFormComponent implements OnInit {
  dataItem;
  editForm;
  validationsList;
  @Input()
  id: number;
  @Input()
  dbContextLocale: DbContextLocale;
  @Input()
  deviceQueueIds: number[];
  constructor(private lbldMedDeviceService: LbldMedDeviceService, private userService: UserService) {

  }

  ngOnInit() {
    this.editForm = new FormGroup({
      GudidBrndNm: new FormControl(),
      GudidDesc: new FormControl(),
      LblrNm: new FormControl()
    });
    this.getLbldMedDevice();
  }

  getLbldMedDevice() {
    this.lbldMedDeviceService.getLbldMedDevice(this.id, this.dbContextLocale)
      .subscribe(result => {
        this.dataItem = result.LabeledMedDevice
      },
      error => { console.log(error); })
  }

  public onSave() {
    this.lbldMedDeviceService.save(this.deviceQueueIds, this.dataItem)
    .subscribe(result => {
      this.dataItem = result.LabeledMedDevice;
      this.validationsList = result.ValidationList;
    });
  }
  public onCancel() {

  }

}
