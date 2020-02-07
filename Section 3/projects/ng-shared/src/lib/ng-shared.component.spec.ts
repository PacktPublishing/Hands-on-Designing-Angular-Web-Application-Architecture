import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgSharedComponent } from './ng-shared.component';

describe('NgSharedComponent', () => {
  let component: NgSharedComponent;
  let fixture: ComponentFixture<NgSharedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgSharedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgSharedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
