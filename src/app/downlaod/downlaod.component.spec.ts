// This is the chill-outs component

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DownlaodComponent } from './downlaod.component';

describe('DownlaodComponent', () => {
  let component: DownlaodComponent;
  let fixture: ComponentFixture<DownlaodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DownlaodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DownlaodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
