/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Job_listComponent } from './job_list.component';

describe('Job_listComponent', () => {
  let component: Job_listComponent;
  let fixture: ComponentFixture<Job_listComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Job_listComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Job_listComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
