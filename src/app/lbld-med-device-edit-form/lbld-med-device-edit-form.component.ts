
import { Component, OnInit, Input, Output, EventEmitter, ViewChild, AfterViewInit } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { LbldMedDevice } from '../models/lbld-med-device';
import { DbContextLocale } from "../models/db-context-locale.enum";
import { LbldMedDeviceService } from "../services/lbld-med-device.service";
import { UserService } from "../services/user.service";
import { DeviceFieldMetadataService } from "../services/device-field-metadata.service";
import { DynamicDeviceFormComponent } from '../dynamic-device-form/dynamic-device-form.component';
import { ServerSideDataType } from '../dynamic-device-form/device-field-base';
import{FdbNotificationMessage, FdbErrorNotificationMessage,FdbSuccessNotificationMessage, FdbNotificationSeverity} from "../shared/fdb-growl/fdb-notification-message";
@Component({
  selector: 'lbld-med-device-edit-form',
  templateUrl: './lbld-med-device-edit-form.component.html',
  styleUrls: ['./lbld-med-device-edit-form.component.scss'],
  providers: [DeviceFieldMetadataService]
})
export class LbldMedDeviceEditFormComponent implements OnInit, AfterViewInit {
  dataItem;
  editForm;
  validationsList;
  fieldMetadata;
  messages: FdbNotificationMessage[] = [];
  @Input() id: number;
  @Input() dbContextLocale: DbContextLocale;
  @Input() deviceQueueIds: number[];

  @ViewChild(DynamicDeviceFormComponent) dynamicDeviceForm: DynamicDeviceFormComponent;

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

  ngAfterViewInit() {

  }

  getLbldMedDevice() {
    this.lbldMedDeviceService.getLbldMedDevice(this.id, this.dbContextLocale)
      .subscribe(result => {
        this.dataItem = result.LabeledMedDevice;
        this.getDeviceFieldsMetadata();
      },
      error => { console.log(error); })
  }
  getDeviceFieldsMetadata() {
    this.deviceFieldMetadataService.getFieldsDictionary()//getFields()
      .subscribe(result => {
        var arrayResult = [];
        for (var key in result) {
          var item = result[key];
          if (this.dataItem[key] !== undefined) {
            if(item.dataTyp === ServerSideDataType.Datetime && this.dataItem[key] !== null){
              var date = new Date(this.dataItem[key]);
              item.value = date.toISOString().substring(0,10);//date.toLocaleDateString();
            }else{
            item.value = this.dataItem[key];

            }
            arrayResult.push(item);
          }
        }
        this.fieldMetadata = arrayResult;
      })
  }

  public onSave() {
    //with the dynamic form inside of this template now we have to save the form's value instead
    //of this.dataItem
    this.lbldMedDeviceService.save(this.deviceQueueIds, this.dynamicDeviceForm.form.value) //this.dataItem
      .subscribe(result => {
        if(result.ValidationList != null && result.ValidationList.length > 0){
          this.messages.push(new FdbErrorNotificationMessage("Not Saved", "Please check validation messages"))
        this.processValidations(result.ValidationList);
        }else{
        this.dataItem = result.LabeledMedDevice;
        this.processValidations(null);
        this.messages.push(new FdbSuccessNotificationMessage("Saved successfully", "Device changes were saved"));
        }
       

      });
  }
  public onCancel() {

  }
  private processValidations(validations: any[]){
  this.validationsList = validations;
  //do we need to report validations to the dynamic form?  i dont think so..
  //this.dynamicDeviceForm.
  }

}
