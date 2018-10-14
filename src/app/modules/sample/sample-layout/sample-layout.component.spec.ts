import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleLayoutComponent } from './sample-layout.component';

describe('SampleLayoutComponent', () => {
  let component: SampleLayoutComponent;
  let fixture: ComponentFixture<SampleLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SampleLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SampleLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
