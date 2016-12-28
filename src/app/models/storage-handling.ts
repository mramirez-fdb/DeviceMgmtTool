import { UnitOfMeasure } from "./unit-of-measure";
export class StorageHandlingType {
    cmprId: string;
    id: number;
    desc: string;
    freeTxt: boolean;
}
export class StorageHandling {
    id: number;
    cmprId: string;
    uOMHighVal: UnitOfMeasure;
    highVal: number;
    uOMLowVal: UnitOfMeasure;
    lowVal: number;
    spclCondTxt: string;
    storHdlngType: StorageHandlingType;
}
