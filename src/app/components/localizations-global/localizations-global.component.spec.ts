import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalizationsGlobalComponent } from './localizations-global.component';

describe('LocalizationsGlobalComponent', () => {
  let component: LocalizationsGlobalComponent;
  let fixture: ComponentFixture<LocalizationsGlobalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocalizationsGlobalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalizationsGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
