import { Component, OnInit,  Input, Output, EventEmitter } from '@angular/core';
import { Validators, FormGroup, FormControl  } from '@angular/forms';
import{DeviceQueueDevice} from "../models/device-queue-device";
@Component({
  selector: 'kendo-grid-edit-form', //app-device-queue-device
  templateUrl: './device-queue-device.component.html',
  styleUrls: ['./device-queue-device.component.scss'],
  providers: []
})
export class DeviceQueueDeviceComponent implements OnInit {
 dataItemToEdit;
 editForm;
 @Input() public set model(deviceQueueDevice: DeviceQueueDevice){
   this.dataItemToEdit = deviceQueueDevice;
   deviceQueueDevice === undefined ? this.active = false: this.active = true;
 }

  @Output() cancel: EventEmitter<any> = new EventEmitter();
  @Output() save: EventEmitter<any> = new EventEmitter();

  constructor() { 
    this.editForm = new FormGroup({
            'GudidBrndNm': new FormControl("", Validators.required),
            'LblrNm': new FormControl()
        })
  }

  ngOnInit() {

  }

public active: boolean = false;

  public onSave(): void {
       console.log("Save clicked");
       this.save.emit(this.dataItemToEdit);
        this.active = false;
        //return false;    
  }
    public onCancel(): void {
        console.log("Cancel clicked");
        this.active = false;
        this.cancel.emit(undefined);
        //return false;       
    }

}
