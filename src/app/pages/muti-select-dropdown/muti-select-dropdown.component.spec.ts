import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MutiSelectDropdownComponent } from './muti-select-dropdown.component';

describe('MutiSelectDropdownComponent', () => {
  let component: MutiSelectDropdownComponent;
  let fixture: ComponentFixture<MutiSelectDropdownComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MutiSelectDropdownComponent]
    });
    fixture = TestBed.createComponent(MutiSelectDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
