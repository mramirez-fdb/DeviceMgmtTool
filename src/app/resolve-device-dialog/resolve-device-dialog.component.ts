import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'resolve-device-dialog',
  templateUrl: './resolve-device-dialog.component.html',
  styleUrls: ['./resolve-device-dialog.component.scss']
})
export class ResolveDeviceDialogComponent implements OnInit {
@Input() open: boolean;
// @Output() cancel: EventEmitter<any> = new EventEmitter();
@Output() dialogClosed: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  onCancel(){
    this.dialogClosed.emit();
  }

}
