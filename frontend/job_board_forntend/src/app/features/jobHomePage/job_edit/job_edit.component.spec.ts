/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Job_editComponent } from './job_edit.component';

describe('Job_editComponent', () => {
  let component: Job_editComponent;
  let fixture: ComponentFixture<Job_editComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Job_editComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Job_editComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
