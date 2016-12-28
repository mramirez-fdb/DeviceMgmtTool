import { UnitOfMeasure} from "./unit-of-measure";
export class DeviceSizeType {
		id: number;
		desc: string;
		freeTxt: boolean;
		cmprId: string;
	}

export class DeviceSize {
    id: number;
		cmprId: string;
		devSzType: DeviceSizeType;
		val: number;
		uOM: UnitOfMeasure;
		szTxt: string;
		isRelvntSz: boolean;
		relvntSzOrdr: number;
}
