export class PropertyNameReferenceValue {
		id: number;
		val: string;
		propNm: PropertyName;
		cmprId: string;
	}

export class PropertyName {
		id: number;
		desc: string;
		hasListofValues: boolean;
		isUsedInEnhancedName: boolean;
		enhancedNameSequence: number;
		cmprId: string;
		propertyNameReferenceValues: PropertyNameReferenceValue[];
	}

export class DeviceProperty {
    id: number;
		cmprId: string;
		val: string;
		unit: string;
		propNm: PropertyName;
		seqNbr: number;
}
