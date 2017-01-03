import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import { Observable } from 'rxjs/Rx';
// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';

import { DeviceFieldBase, FieldControlType, FieldReferenceValueMetadata } from "../dynamic-device-form/device-field-base";
@Injectable()
export class DeviceFieldMetadataService {
    private metadataAPIUrl: string = "http://localhost:46097/api/bulk/";
    constructor(private http: Http) { }

    getFields(): Observable<DeviceFieldBase<any>[]> {
        return this.http.get(this.metadataAPIUrl + "fields")
            .map((res: Response) => {
                var json = res.json();
                var fields: DeviceFieldBase<any>[] = [];
                json.forEach(item => {
                    let fieldControlType: FieldControlType.Textbox;

                    fields.push(new DeviceFieldBase({
                        value: null, name: item.Nm, label: item.DspNm, required: false, order: 1,
                        controlType: fieldControlType,
                        fieldRefValueMetadata: new FieldReferenceValueMetadata(item.FcsRstEndPnt, item.FcsHttpRqstTyp, item.FcsRoDaNm, item.FcsDaTxtFld, item.FcsDaVaFld)
                    }));
                });
                return fields;
            }
            )
            .catch((error: any) => Observable.throw(error.json().error || "Server Error"));
    }
}