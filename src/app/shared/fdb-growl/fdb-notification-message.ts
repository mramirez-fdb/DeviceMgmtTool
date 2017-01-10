import{Message} from "primeng/primeng";
export enum FdbNotificationSeverity{
    success = 0,
    info = 100,
    warn = 200,
    error = 300,
}
export class FdbNotificationMessage implements Message{
    severity?: string;
    summary?: string;
    detail?: string;

    constructor(severity: FdbNotificationSeverity, summary: string, detail: string){
        this.severity = FdbNotificationSeverity[severity];
        this.summary = summary;
        this.detail = detail;
    }
}
export class FdbErrorNotificationMessage extends FdbNotificationMessage{
    constructor(summary: string, detail: string){
        super(FdbNotificationSeverity.error, summary, detail);
        //this.severity = ;
    }

}

export class FdbSuccessNotificationMessage extends FdbNotificationMessage{
    constructor(summary: string, detail: string){
        super(FdbNotificationSeverity.success, summary, detail);
        //this.severity = ;
    }

}