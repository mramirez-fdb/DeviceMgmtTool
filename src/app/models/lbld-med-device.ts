import {Labeler} from "./labeler";
import {Audit} from "./audit";
import{Status} from "./status";
import{DeviceAlternateName} from "./device-alternate-name";
import{DeviceCatalogNumber} from "./device-catalog-number";
import{DeviceMriSafety} from "./device-mri-safety";
import{DeviceCategory} from "./device-category";
import {DeviceHcpcs} from "./device-hcpcs";
import{DeviceFDAProductCode} from "./device-fda-product-code";
import{DeviceSubmission} from "./device-submission";
import{SterilizationMethod} from "./sterilization-method";
import{DeviceSize} from "./device-size";
import{StorageHandling} from "./storage-handling";
import{ContactInfo} from "./contact-info";
import{DeviceProperty} from "./device-property";
import{DeviceReferenceProperty} from "./device-reference-property";
import{DeviceAlternateLabeler} from "./device-alternate-labeler";
import{DeviceKit} from "./device-kit";
import{ModelValidation} from "./model-validation";
import {LbldMedDeviceExternalIdentifier} from "./lbld-med-device-external-identifier";
import{PackageMedDevice, PackageType} from "./package-med-device";
export class LabeledMedDeviceBase {
		lblr: Labeler;
		orgnlLblrNm: string;
		stdrdDevNm: string;
		isDfltStdrdDevNm: boolean;
		gudidVerMdlNbr: string;
		/** GudidBrandName is for data coming from GUDID (FDA) or 1WS */
		gudidBrndNm: string;
		altBrndNm: string;
		brndNm: string;
		verNbr: string;
		mdlNbr: string;
		devCatNbrs: DeviceCatalogNumber[];
		devAltNms: DeviceAlternateName[];
		sts: Status;
		/** GudidDescription is for data coming from GUDID (FDA) or 1WS */
		gudidDesc: string;
		altDesc: string;
		devMRISftyLst: DeviceMriSafety[];
		isLblReqCntnNatRbbrLtx: boolean;
		isLblAsNotMadeWithNatRbbrLtx: boolean;
		basePkgCnt: number;
		basePkgTyp: PackageType;
		isSnglUse: boolean;
		isRx: boolean;
		isOtc: boolean;
		isKit: boolean;
		isCboPrdct: boolean;
		hasHumanCellsOrTssu: boolean;
		isDrctMarkingExmpt: boolean;
		isPreMarketExmpt: boolean;
		devCats: DeviceCategory[];
		devHcpcs: DeviceHcpcs[];
		devFDAPrdctCds: DeviceFDAProductCode[];
		devSubs: DeviceSubmission[];
		isPkgAsStrl: boolean;
		doesReqStrlPriorToUse: boolean;
		strlMthds: SterilizationMethod[];
		devSz: DeviceSize[];
		storHdlng: StorageHandling[];
		hasLotOrBtchNbr: boolean;
		hasSerialNbr: boolean;
		hasExpDt: boolean;
		hasMfgDt: boolean;
		hasDntnIdNbr: boolean;
		cntctInfos: ContactInfo[];
		devProps: DeviceProperty[];
		devRefProps: DeviceReferenceProperty[];
		devAltLblrs: DeviceAlternateLabeler[];
		diRecPubDt: Date;
		commDistSts: string;
		dtNoLongerDist: Date;
		devKits: DeviceKit[];
		addDt: Date;
		endDt: Date;
		mfgGLN: string;
		infoProvdrGLN: string;
		isFdbFldsKBSValdt: boolean;
		oNNTp1: string;
		oNNTp2: string;
		oNNSgmnt: string;
		oNNSbSgmnt: string;
		oNNGcDsc: string;
		oNNGcTp1: string;
		oNNGcTp2: string;
		fDBPrdctId: number;
	};

    export class LbldMedDevice extends LabeledMedDeviceBase{
        id: number;
		cmprId: string;
		lbldMedDevIdntfrs: LbldMedDeviceExternalIdentifier[];
		pkgMedDevs: PackageMedDevice[];
		audit: Audit;
};

export class LbldMedDeviceResponse{
    LabeledMedDevice: LbldMedDevice
}

export class LbldMedDeviceSaveResponse extends LbldMedDeviceResponse{
    ValidationList: ModelValidation[]; 
}