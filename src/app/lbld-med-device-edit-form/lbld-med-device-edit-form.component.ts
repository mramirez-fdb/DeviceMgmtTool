
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { LbldMedDevice } from '../models/lbld-med-device';
import { DbContextLocale } from "../models/db-context-locale.enum";
import { LbldMedDeviceService } from "../services/lbld-med-device.service";
import { UserService } from "../services/user.service";
import{DeviceFieldMetadataService} from "../services/device-field-metadata.service";
@Component({
  selector: 'lbld-med-device-edit-form',
  templateUrl: './lbld-med-device-edit-form.component.html',
  styleUrls: ['./lbld-med-device-edit-form.component.scss'],
  providers:[DeviceFieldMetadataService]
})
export class LbldMedDeviceEditFormComponent implements OnInit {
  dataItem;
  editForm;
  validationsList;
  fieldMetadata;
  @Input()
  id: number;
  @Input()
  dbContextLocale: DbContextLocale;
  @Input()
  deviceQueueIds: number[];
  constructor(private lbldMedDeviceService: LbldMedDeviceService, private deviceFieldMetadataService: DeviceFieldMetadataService, private userService: UserService) {

  }

  ngOnInit() {
    this.editForm = new FormGroup({
      GudidBrndNm: new FormControl(),
      GudidDesc: new FormControl(),
      LblrNm: new FormControl()
    });
    this.getLbldMedDevice();
    this.getDeviceFieldsMetadata();
    
  }

  getLbldMedDevice() {
    this.lbldMedDeviceService.getLbldMedDevice(this.id, this.dbContextLocale)
      .subscribe(result => {
        this.dataItem = result.LabeledMedDevice
      },
      error => { console.log(error); })
  }
  getDeviceFieldsMetadata(){
    this.deviceFieldMetadataService.getFields()
    .subscribe(result => {
      this.fieldMetadata = result;
    })
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
