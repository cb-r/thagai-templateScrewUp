/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FindOutMoreComponent } from './find-out-more.component';

describe('FindOutMoreComponent', () => {
  let component: FindOutMoreComponent;
  let fixture: ComponentFixture<FindOutMoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindOutMoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindOutMoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
