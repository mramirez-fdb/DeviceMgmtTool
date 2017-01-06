import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import { Observable } from 'rxjs/Rx';
// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';

import { DeviceFieldBase, FieldControlType, ServerSideDataType, FieldReferenceValueMetadata } from "../dynamic-device-form/device-field-base";
import { fieldMetadata } from "../mock-field-metadata";
@Injectable()
export class DeviceFieldMetadataService {
    private metadataAPIUrl: string = "http://localhost:46097/api/bulk/";
    constructor(private http: Http) { }

    getFields(): Observable<DeviceFieldBase<any>[]> {
        return this.http.get(this.metadataAPIUrl + "fields")
            .map((res: Response) => {
                var json = res.json();
                //warning here we instead mock the data and not use the one returned by service because data from service is lacking
                //some details that we would need.  if this becomes viable then we need to update the metadata table with these extra fields
                json = fieldMetadata;//todo remove this line here
                var fields: DeviceFieldBase<any>[] = [];
                json.forEach(item => {
                    let fieldControlType: FieldControlType; // = FieldControlType.Textbox;
                    fieldControlType = item.FldCntntSrc;
                    let dataType: ServerSideDataType;
                    dataType = item.dataTyp;
                    fields.push(new DeviceFieldBase({
                        value: null, 
                        name: item.Nm,
                        classPropertyName: item.ClassPropertyName, 
                        displayName: item.DspNm, 
                        required: item.IsRequired, 
                        order: item.FormOrderMagnitude,
                        fieldControlType: fieldControlType,
                        dataTyp: dataType,
                        fieldRefValueMetadata: new FieldReferenceValueMetadata(item.FcsRstEndPnt, item.FcsHttpRqstTyp, item.FcsRoDaNm, item.FcsDaTxtFld, item.FcsDaVaFld)
                    }));
                });
                return fields;//.sort((a, b) => a.order - b.order);
            }
            )
            .catch((error: any) => Observable.throw(error.json().error || "Server Error"));
    }

    getFieldsDictionary(): Observable<DeviceFieldBase<any>[]> {
        return this.http.get(this.metadataAPIUrl + "fields")
            .map((res: Response) => {
                var json = res.json();
                //warning here we instead mock the data and not use the one returned by service because data from service is lacking
                //some details that we would need.  if this becomes viable then we need to update the metadata table with these extra fields
                json = fieldMetadata;//todo remove this line here
                var fields: DeviceFieldBase<any>[] = [];
                json.forEach(item => {
                    let fieldControlType: FieldControlType; // = FieldControlType.Textbox;
                    fieldControlType = item.FldCntntSrc;
                    let dataType: ServerSideDataType;
                    dataType = item.DataTyp;
                    fields[item.ClassPropertyName] = new DeviceFieldBase({
                        value: null, 
                        name: item.Nm, 
                        classPropertyName: item.ClassPropertyName,
                        displayName: item.DspNm, 
                        required: item.IsRequired, 
                        order: item.FormOrderMagnitude,
                        readonly: item.IsReadonly,
                        fieldControlType: fieldControlType,
                        dataTyp: dataType,
                        fieldRefValueMetadata: new FieldReferenceValueMetadata(item.FcsRstEndPnt, item.FcsHttpRqstTyp, item.FcsRoDaNm, item.FcsDaTxtFld, item.FcsDaVaFld)
                    });
                });
                return fields;
            }
            )
            .catch((error: any) => Observable.throw(error.json().error || "Server Error"));
    }
}