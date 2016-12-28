import {LbldMedDeviceExternalIdentifier} from "./lbld-med-device-external-identifier";
export class FdbDevice {
    id: number;
    gTIN: string;
    hIBC: string;
    externalIdsArray: string;
    lbldMedDevIdntfrs: LbldMedDeviceExternalIdentifier[];
    gudidBrndNm: string;
    lblrNm: string;
    gudidDesc: string;
    idntfrCnt: number;
    lstMdDt: Date;
    lstMdById: number;
    lastModUsrNm: string;
    stdrdDevNm: string;
    brndNm: string;
    isFdbFldsKBSValdt: boolean;
    isDfltStdrdDevNm: boolean;
}

export class FdbDeviceSearchResponse{
    Devices: FdbDevice[];
    TotalResultCount: number;
    Ids: number[];
}