/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TriStateBoolComponent } from './tri-state-bool.component';

describe('TriStateBoolComponent', () => {
  let component: TriStateBoolComponent;
  let fixture: ComponentFixture<TriStateBoolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TriStateBoolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TriStateBoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
