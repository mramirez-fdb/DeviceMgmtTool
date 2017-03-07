import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import {LbldMedDeviceService} from "../services/lbld-med-device.service";
import{FdbDevice} from "../models/fdb-device";
import{FDBDeviceState} from "../models/fdb-device-state.enum";
import {
  GridDataResult,
  PageChangeEvent
} from '@progress/kendo-angular-grid';
import {KendoGridEditDialogComponent} from "../kendo-grid-edit-dialog/kendo-grid-edit-dialog.component";
import{Message} from "primeng/primeng";
@Component({
  selector: 'app-fdb-devices',
  templateUrl: './fdb-devices.component.html',
  styleUrls: ['./fdb-devices.component.scss'],
 // providers: [LbldMedDeviceService] //we now have an fdbdevicesmodule so we can provide the service to the whole module instead of on each component. we don't have to though
})
export class FdbDevicesComponent implements OnInit, AfterViewInit {
  public dataItemToEdit: FdbDevice;
  messages: Message[] = [];
  private fdbDevicesData: FdbDevice[];
  private gridView: GridDataResult;
  private pageSize: number = 10;
  private page: number = 1;
  private skip: number = 0;
  private state: FDBDeviceState = FDBDeviceState.Published;
  constructor(private lbldMedDeviceService: LbldMedDeviceService) { }

  ngOnInit() {
    this.getFdbDevices();
  }
  ngAfterViewInit(){
    
  }

  getFdbDevices(){
    var criteria: any = { pageSize: this.pageSize, page: this.page, FdbDeviceState : FDBDeviceState.Published, sort: null };
    this.lbldMedDeviceService.getFdbDevices(this.state.toString(),criteria).subscribe(
      result => {
        this.gridView = {
          data: result.Devices,
          total: result.TotalResultCount
        }
      },
      error => { console.log(error); }
    );
  }
public onEdit(dataItem: FdbDevice): void {
    this.dataItemToEdit = dataItem;
  }

  public onCancel(): void {
    this.dataItemToEdit = undefined;
  }

  public onSave(device: FdbDevice): void {
    this.dataItemToEdit = undefined;
    /* const operation = product.ProductID === undefined ?
         this.createProduct(product) :
         this.saveProducts(product);*/

    /*operation.switchMap(x => this.getProducts())
        .subscribe((response: Product[]) => {
            this.view = response;
        });*/
  }
  public addFdbDevice(): void{
this.messages.push({severity: "info", summary: "testing", detail:"more stuff here"});
  }
  protected pageChange(event: PageChangeEvent): void {
    this.skip = event.skip;
    this.pageSize = event.take;
    this.page = (event.skip + event.take) / this.pageSize;
    this.getFdbDevices();
  }

  @ViewChild(KendoGridEditDialogComponent)
  protected editDialogComponent: KendoGridEditDialogComponent;

}
