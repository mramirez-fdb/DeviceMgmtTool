import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import { FdbDeviceSearchCriteria } from "../models/kendo-criteria";
import { FdbDeviceSearchResponse } from "../models/fdb-device";
import {AuthService} from "./auth.service";
import{LbldMedDevice, LbldMedDeviceResponse, LbldMedDeviceSaveResponse} from "../models/lbld-med-device";
import {DbContextLocale} from "../models/db-context-locale.enum";
import { Observable } from 'rxjs/Rx';
// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
@Injectable()
export class LbldMedDeviceService {
  private lbldMedDevAPIUrl: string = "http://localhost:46097/api/lmd/";
  constructor(private http: Http, private authHttp: AuthService) { 

  }

  getFdbDevices(state: string, criteria: FdbDeviceSearchCriteria): Observable<FdbDeviceSearchResponse> {
    return this.authHttp.AuthPost(this.lbldMedDevAPIUrl + "list/" + state,
      criteria)
      .map((res: Response) => {
        var data: any = res.json();
        return { "Devices": data.FdbDevs, "TotalResultCount": data.TotlRsltCnt, "Ids": data.Ids }
      }
      )
      .catch((error: any) => Observable.throw(error.json().error || "Server Error"));
  }

  getLbldMedDevice(id: number, dbContextLocale: DbContextLocale = DbContextLocale.Working, 
  comparerIds: boolean = false, setHasBeenPublished: boolean = false): Observable<LbldMedDeviceResponse>{
    return this.authHttp.AuthGet(this.lbldMedDevAPIUrl + id +"?DbContextLocale="+ dbContextLocale+"&comparerIds="+comparerIds+"&setHasBeenPublished="+ setHasBeenPublished)
    .map((res: Response) => res.json())
    .map((devices: LbldMedDeviceResponse) => devices)
    .catch((error: Response | any) => Observable.throw(error.json().error || "Server Error"));
  }
  save(lbldMedDeviceInQueueIds: number[], device: LbldMedDevice): Observable<LbldMedDeviceSaveResponse>{
    let lbldMedDevSaveRequest = {LabeledMedDeviceInQueueIds: lbldMedDeviceInQueueIds, Lmd: device};
    return this.http.post(this.lbldMedDevAPIUrl+ "/save",lbldMedDevSaveRequest)
    .map((res: Response) => res.json())
    .map((obj: LbldMedDeviceSaveResponse) => obj)
    .catch((error: Response | any ) => Observable.throw(error.json().error || "Server Error"));
  }
}
