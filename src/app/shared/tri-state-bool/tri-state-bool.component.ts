import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'tri-state-bool',
  templateUrl: './tri-state-bool.component.html',
  styleUrls: ['./tri-state-bool.component.scss']
})
export class TriStateBoolComponent implements OnInit {
  selectedBoolState;
  elementName: string;
  elementId: string;
  items: Array<{text: string, value: string}> = [{text: "", value: "null"}, {text: "Yes", value: "true"}, {text: "No", value: "false"}];

  @Input() fieldName: string;
  @Input() disabled: boolean;
  @Input() initialSelection: boolean;
  @Output() selectionChange: EventEmitter<any> = new EventEmitter();

  constructor() {
    
  }

  ngOnInit() {
    this.selectedBoolState = this.initialSelection;
    let prefix = "triStateBoolComponent-";
    this.elementId = prefix + this.fieldName;
    this.elementName = prefix + this.fieldName;
  }

  onChange(e) {
    let boolVal = null;
    switch (e.value) {
      case "true":
        boolVal = true;
        break;
      case "false":
        boolVal = false;
      default:
        boolVal = null;
        break;
    }
    this.selectionChange.emit(boolVal);
  }

}
