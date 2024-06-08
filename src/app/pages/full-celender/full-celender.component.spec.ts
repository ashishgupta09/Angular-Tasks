import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullCelenderComponent } from './full-celender.component';

describe('FullCelenderComponent', () => {
  let component: FullCelenderComponent;
  let fixture: ComponentFixture<FullCelenderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FullCelenderComponent]
    });
    fixture = TestBed.createComponent(FullCelenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
