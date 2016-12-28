export class DeviceCategoryType {
		id: number;
		desc: string;
		cmprId: string;
	}

export class DeviceCategory {
    id: number;
    cmprId: string;
    addDt: Date;
    endDt: Date;
    nm: string;
    def: string;
    devCatType: DeviceCategoryType;
    catCd: string;
    hasBeenPub: boolean;
}
