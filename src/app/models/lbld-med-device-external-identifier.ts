
export class MedDeviceExternalIdentifier {
		extMedDevId: number;
		extMedDevTypeId: number;
		extMedDevTypeNm: string;
		extMedDevAgcyId: number;
		extMedDevAgcyNm: string;
		extMedDevDesgntrId: number;
		extMedDevDesgntrNm: string;
		extId: string;
	}

export class LbldMedDeviceExternalIdentifier extends MedDeviceExternalIdentifier{
        cmprId: string;
		addDt: Date;
		endDt: Date;
		labeledMedDeviceId: number;
		hasBeenPub: boolean;
}


