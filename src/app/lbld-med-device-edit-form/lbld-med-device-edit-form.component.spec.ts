/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LbldMedDeviceEditFormComponent } from './lbld-med-device-edit-form.component';

describe('LbldMedDeviceEditFormComponent', () => {
  let component: LbldMedDeviceEditFormComponent;
  let fixture: ComponentFixture<LbldMedDeviceEditFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LbldMedDeviceEditFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LbldMedDeviceEditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
