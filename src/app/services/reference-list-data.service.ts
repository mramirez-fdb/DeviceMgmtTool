import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import { FieldReferenceValueMetadata } from "../dynamic-device-form/device-field-base";
import {AuthService} from "./auth.service";
import { Observable } from 'rxjs/Rx';
// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
@Injectable()
export class ReferenceListDataService {
  private apiBase: string = "http://localhost:46097/api/";
  constructor(private http: Http, private authHttp: AuthService) { }


  getDataByGet(metaData: FieldReferenceValueMetadata) {
    return this.authHttp.AuthGet(this.apiBase + metaData.RestEndpoint)
      .map((res: Response) => res.json())
      .map((refListData: any) => refListData[metaData.ResponseRootName])
      .catch((error: Response | any) => Observable.throw(error.json().error || "Server Error"));
  }
  getDataByPost(metaData: FieldReferenceValueMetadata, postData: Object) {
    return this.authHttp.AuthPost(this.apiBase + metaData.RestEndpoint, postData)
      .map((res: Response) => {
        var refListData: any = res.json();
        return refListData[metaData.ResponseRootName];
      }
      )
      .catch((error: any) => Observable.throw(error.json().error || "Server Error"));
  }
}
