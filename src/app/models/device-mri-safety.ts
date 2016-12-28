
export class MRISafety {
    id: number;
    desc: string;
    cmprId: string;
}
export class MRISource {
    id: number;
    srcNm: string;
    cmprId: string;
}
export class DeviceMriSafety {
    id: number;
    cmprId: string;
    mRISafety: MRISafety;
    mRISource: MRISource;
}
