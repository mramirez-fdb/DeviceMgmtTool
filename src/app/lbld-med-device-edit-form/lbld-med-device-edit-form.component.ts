
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
    //this.getDeviceFieldsMetadata();//need to combine the values into the formcontrols so we need to move this to after getLbldMedDevice() returns
    
  }

  getLbldMedDevice() {
    this.lbldMedDeviceService.getLbldMedDevice(this.id, this.dbContextLocale)
      .subscribe(result => {
        this.dataItem = result.LabeledMedDevice;
        this.getDeviceFieldsMetadata();
      },
      error => { console.log(error); })
  }
  getDeviceFieldsMetadata(){
    this.deviceFieldMetadataService.getFieldsDictionary()//getFields()
    .subscribe(result => {
      var arrayResult = [];
      for(var key in result){
          var item = result[key];
          if(this.dataItem[key] !== undefined){
            item.value = this.dataItem[key];
            arrayResult.push(item);
          }
      }
      this.fieldMetadata = arrayResult;
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
