import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudOpertionComponent } from './crud-opertion.component';

describe('CrudOpertionComponent', () => {
  let component: CrudOpertionComponent;
  let fixture: ComponentFixture<CrudOpertionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrudOpertionComponent]
    });
    fixture = TestBed.createComponent(CrudOpertionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
