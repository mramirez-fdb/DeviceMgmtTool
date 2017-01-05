export enum ServerSideDataType {
    String = 1,
    Long = 2,
    Integer = 3,
    Boolean = 4,
    Decimal = 5,
    Datetime = 6,
    Object = 7,
    ReferentialObject = 8,
    Array = 10
}
export enum FieldControlType {
    Textbox = 1,
    List = 2,
    Combo = 3,
    Textarea = 4,
    Checkbox = 5,
    Form = 6,
    Grid = 7,
    DatetimeTextbox = 101,
    EmailTextbox = 102,
    NumericTextbox = 103,
    SwitchButton = 501,
    RadioButton = 502,
    SubData = 10
}

export enum HttpRequestType {
    None = 0,
    Get = 1,
    Post = 2
}
export class FieldReferenceValueMetadata {
    RestEndpoint: string;
    HttpRequestType: HttpRequestType;
    ResponseRootName: string;
    DataTextFieldName: string;
    DataValueFieldName: string;

    constructor(endpoint: string, requestType: HttpRequestType, rootName: string, dataTextFieldName: string, dataValueFieldName: string) {
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
    dataTyp: ServerSideDataType;
    dspNm: string;
    //isCrtriaFld: boolean; not in base
    //isUpdFld: boolean; not in base
    //isSrtFld: boolean; not in base
    nm: string;
    classPropertyName: string;
    //oprs: any[]; not in base
    //tblSrc: any; not in base
    fieldControlType: FieldControlType;
    //fcsRstEndPnt: string;
    //fcsHttpRqstTyp: HttpRequestType;  //needs type
    //fcsRoDaNm: string;
    //fcsDaTxtFld: string;
    //fcsDaVaFld: string;
    fieldRefValueMetadata: FieldReferenceValueMetadata;
    required: boolean;
    order: number;
    //objectGraphPath: string; //not in base

    constructor(options: {
        value?: T, 
        name?: string,
        classPropertyName?: string,
         displayName?: string,
        required?: boolean, order?: number,
        fieldControlType?: FieldControlType,
        dataTyp?: ServerSideDataType,
        fieldRefValueMetadata?: FieldReferenceValueMetadata
    } = {}) {
        this.value = options.value;
        this.nm = options.name;
        this.classPropertyName = options.classPropertyName;
        this.dspNm = options.displayName || '';
        this.required = !!options.required;
        this.order = options.order === undefined ? 10 : options.order;
        this.fieldControlType = options.fieldControlType || FieldControlType.Textbox;
        this.dataTyp = options.dataTyp || ServerSideDataType.String;
        this.fieldRefValueMetadata = options.fieldRefValueMetadata;

    }
    getTextboxType() {
        switch (this.dataTyp) {
            case ServerSideDataType.String:
                return "text";
            case ServerSideDataType.Datetime:
                return "date";
            case ServerSideDataType.Integer:
            case ServerSideDataType.Decimal:
            case ServerSideDataType.Long:
                return "number";

            default:
                return "text";
        }
    }
    getTextboxWidth(){
        switch (this.dataTyp) {
            case ServerSideDataType.String:
                return "200px";
            case ServerSideDataType.Datetime:
                return "100px";
            case ServerSideDataType.Integer:
            case ServerSideDataType.Decimal:
            case ServerSideDataType.Long:
                return "100px";

            default:
                return "100px";
        }
    }
}