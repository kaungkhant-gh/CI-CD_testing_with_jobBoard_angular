/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Job_addComponent } from './job_add.component';

describe('Job_addComponent', () => {
  let component: Job_addComponent;
  let fixture: ComponentFixture<Job_addComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Job_addComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Job_addComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
