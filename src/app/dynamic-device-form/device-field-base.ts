export enum ServerSideDataType {
    String = 1,
    Long = 2,
    Integer = 3,
    Boolean = 4,
    Decimal = 5
}
export enum FieldControlType {
    Textbox = 1,
    List = 2,
    Combo = 3,
    Textarea = 4,
    NumbericTextbox = 5,
    SubData = 6
}

export enum HttpRequestType {
    None = 0,
    Get = 1,
    Post = 2
}
export class FieldReferenceValueMetadata{
    RestEndpoint: string;
    HttpRequestType: HttpRequestType;
    ResponseRootName: string;
    DataTextFieldName: string;
    DataValueFieldName: string;

    constructor(endpoint: string, requestType: HttpRequestType, rootName: string, dataTextFieldName: string, dataValueFieldName: string){
        this.RestEndpoint = endpoint;
        this.HttpRequestType = requestType;
        this.ResponseRootName = rootName;
        this.DataTextFieldName = dataTextFieldName;
        this.DataValueFieldName = dataValueFieldName;
    }
}
export class DeviceFieldBase<T>{
    id: number;
    value: T;
    dataTyp: ServerSideDataType;   //needs type
    dspNm: string;
    //isCrtriaFld: boolean; not in base
    //isUpdFld: boolean; not in base
    //isSrtFld: boolean; not in base
    nm: string;
    //oprs: any[]; not in base
    //tblSrc: any; not in base
    fieldControlType: FieldControlType; //needs type
    //fcsRstEndPnt: string;
    //fcsHttpRqstTyp: HttpRequestType;  //needs type
    //fcsRoDaNm: string;
    //fcsDaTxtFld: string;
    //fcsDaVaFld: string;
    fieldRefValueMetadata: FieldReferenceValueMetadata;
    required: boolean;
    order: number;
    //objectGraphPath: string; //not in base

    constructor(options: { value?: T, name?: string, label?: string, 
        required?: boolean, order?: number, controlType?: FieldControlType,
    fieldRefValueMetadata?: FieldReferenceValueMetadata } = {}) {
        this.value = options.value;
        this.nm = options.name;
        this.dspNm = options.label || '';
        this.required = !!options.required;
        this.order = options.order === undefined ? 1 : options.order;
        this.fieldControlType = options.controlType || FieldControlType.Textbox;
        this.fieldRefValueMetadata = options.fieldRefValueMetadata;

    }
}