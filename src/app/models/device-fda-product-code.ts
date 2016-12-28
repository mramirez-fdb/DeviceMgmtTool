export class FDAProductCode {
    id: number;
    cd: string;
    nm: string;
    devClassId: number;
    devClassDesc: string;
    isImplntbl: boolean;
    isLifeSustng: boolean;
    cmprId: string;
}

export class DeviceFDAProductCode {
    id: number;
    fDAPrdctCd: FDAProductCode;
    cmprId: string;
    addDt: Date;
    endDt: Date;
    hasBeenPub: boolean;
}
