/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FdbGrowlComponent } from './fdb-growl.component';

describe('FdbGrowlComponent', () => {
  let component: FdbGrowlComponent;
  let fixture: ComponentFixture<FdbGrowlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FdbGrowlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FdbGrowlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
