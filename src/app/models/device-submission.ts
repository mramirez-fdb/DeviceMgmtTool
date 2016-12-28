export class SubmissionType {
		id: number;
		desc: string;
		cmprId: string;
	}

export class DeviceSubmission {
    id: number;
		cmprId: string;
		fDASubNbr: string;
		fDASupNbr: string;
		subType: SubmissionType;
}
