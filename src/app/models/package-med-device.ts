import { MedDeviceExternalIdentifier } from "./lbld-med-device-external-identifier"
import{Status} from "./status";
export class PackageType {
    id: number;
    code: string;
    desc: string;
    cmprId: string;
}

export class PackageMedDeviceExternalIdentifier extends MedDeviceExternalIdentifier {
    cmprId: string;
    addDt: Date;
    endDt: Date;
    hasBeenPub: boolean;
}

export class PackageMedDevice {
    id: number;
    cmprId: string;
    qty: number;
    pkgType: PackageType;
    discDate: Date;
    addDate: Date;
    endDate: Date;
    sts: Status;
    pkgMedDevIdntfrs: PackageMedDeviceExternalIdentifier[];
    cntnrPkg: PackageMedDevice;
    hasBeenPub: boolean;
}
