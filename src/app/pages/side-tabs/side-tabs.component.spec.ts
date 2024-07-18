import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideTabsComponent } from './side-tabs.component';

describe('SideTabsComponent', () => {
  let component: SideTabsComponent;
  let fixture: ComponentFixture<SideTabsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SideTabsComponent]
    });
    fixture = TestBed.createComponent(SideTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
