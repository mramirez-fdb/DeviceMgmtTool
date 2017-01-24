import { Injectable } from '@angular/core';
import {Http, Response} from "@angular/http";
import {AuthService} from "./auth.service";
import {DeviceQueueDevice, DeviceQueueDeviceResult} from "../models/device-queue-device";
import {DeviceQueueDevices} from "../mock-device-queue";
import {Observable} from 'rxjs/Rx';
// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class DeviceQueueService {
private deviceQueueAPIUrl: string = "http://localhost:46097/api/devicequeue";
  constructor(private http: Http, private authHttp: AuthService) { }

  getDevices(): DeviceQueueDevice[]{
    return DeviceQueueDevices;
  }
  getDevicesViaPromise(): Promise<DeviceQueueDevice[]>{
    //return Promise.resolve(DeviceQueueDevices);
    return this.http.post(this.deviceQueueAPIUrl, 
       {"take":30,"skip":0,"page":1,"pageSize":30,"filter":{"logic":"and","filters":[]}})
       .toPromise()
       .then(response => response.json().DevQueueDevs as DeviceQueueDevice[])
       .catch(this.handleError);
  }
  getDevicesViaObservable(): Observable<DeviceQueueDevice[]>{
       return this.http.post(this.deviceQueueAPIUrl, 
       {"take":30,"skip":0,"page":1,"pageSize":30,"filter":{"logic":"and","filters":[]}})
       .map((res:Response) => res.json().DevQueueDevs
        )
       .catch((error: any) => Observable.throw(error.json().error || "Server Error"));

  }
  getDevicesViaObserWithPaging(kendoCriteria): Observable<DeviceQueueDeviceResult>{
  return this.authHttp.AuthPost(this.deviceQueueAPIUrl, 
       kendoCriteria)
       .map((res:Response) => {
         return {"Devices": res.json().DevQueueDevs,  "Total": res.json().TotlRsltCnt}
        }
        )
       .catch((error: any) => Observable.throw(error.json().error || "Server Error"));
  }

  private handleError(error: any): Promise<any>{
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  
}
