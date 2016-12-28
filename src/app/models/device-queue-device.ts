export class DeviceQueueDevice {
    Id: number;
    GTIN: string
    GudidBrndNm: string;
    LblrNm: string;
    LbldMedDevIdntfrs: any[]
}

export class DeviceQueueDeviceResult{
    Devices: DeviceQueueDevice[];
    Total: number;
}