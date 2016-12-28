import { Component, OnInit, ViewChild } from '@angular/core';
import { DeviceQueueService } from "../services/device-queue.service";
import { DeviceQueueDevice } from "../models/device-queue-device";
import {
  GridDataResult,
  PageChangeEvent
} from '@progress/kendo-angular-grid';
import { DeviceQueueDeviceComponent } from '../device-queue-device/device-queue-device.component';

@Component({
  selector: 'app-device-queue',
  templateUrl: './device-queue.component.html',
  styleUrls: ['./device-queue.component.scss'],
  providers: [DeviceQueueService]
})
export class DeviceQueueComponent implements OnInit {
  public dataItemToEdit: DeviceQueueDevice;
  private deviceQueueData: DeviceQueueDevice[];
  private gridView: GridDataResult;
  private pageSize: number = 10;
  private page: number = 1;
  private skip: number = 0;
  constructor(private deviceQueueService: DeviceQueueService) { }

  ngOnInit() {

    this.getDevices();
  }
  getDevices() {
    //this works this.deviceQueueData = this.deviceQueueService.getDevices();
    //this works this.deviceQueueService.getDevicesViaPromise().then(devices => this.deviceQueueData = devices);
    //this works 
    /*this.deviceQueueService.getDevicesViaObservable().subscribe(
      devices => this.deviceQueueData = devices,
      err => {console.log(err);
        });*/
    this.deviceQueueService.getDevicesViaObserWithPaging({ pageSize: this.pageSize, page: this.page })
    .subscribe(
      result => {
        this.gridView = {
          data: result.Devices,
          total: result.Total
        }
      },
      error => { console.log(error); }
    )
  }

  public onEdit(dataItem: any): void {
    this.dataItemToEdit = dataItem;
  }

  public onCancel(): void {
    this.dataItemToEdit = undefined;
  }

  public onSave(device: DeviceQueueDevice): void {
    this.dataItemToEdit = undefined;
    /* const operation = product.ProductID === undefined ?
         this.createProduct(product) :
         this.saveProducts(product);*/

    /*operation.switchMap(x => this.getProducts())
        .subscribe((response: Product[]) => {
            this.view = response;
        });*/
  }

  protected pageChange(event: PageChangeEvent): void {
    this.skip = event.skip;
    this.pageSize = event.take;
    this.page = (event.skip + event.take) / this.pageSize;
    this.getDevices();
  }

  @ViewChild(DeviceQueueDeviceComponent)
  protected editFormComponent: DeviceQueueDeviceComponent;

}
