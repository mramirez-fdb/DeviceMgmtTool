import {FDBDeviceState} from "./fdb-device-state.enum";
export class Sort {
    field: string;
    dir: string;
}
export class FilterField {
    logic: string;
    field: string;
    type: string;
    operator: string;
    value: string;
    filters: FilterField[];
}
export class Filter {
    filters: FilterField[];
    logic: string;
}

export class KendoCriteria {
    page: number;
    pageSize: number;
    sort: Sort[];
    filter: Filter;
}

export class FdbDeviceSearchCriteria extends KendoCriteria {
    FdbDeviceState: FDBDeviceState
}
