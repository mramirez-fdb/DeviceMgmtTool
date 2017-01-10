/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ReferentialComboboxComponent } from './referential-combobox.component';

describe('ReferentialComboboxComponent', () => {
  let component: ReferentialComboboxComponent;
  let fixture: ComponentFixture<ReferentialComboboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReferentialComboboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReferentialComboboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
