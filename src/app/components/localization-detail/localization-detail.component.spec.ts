import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalizationDetailComponent } from './localization-detail.component';

describe('LocalizationDetailComponent', () => {
  let component: LocalizationDetailComponent;
  let fixture: ComponentFixture<LocalizationDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocalizationDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalizationDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
