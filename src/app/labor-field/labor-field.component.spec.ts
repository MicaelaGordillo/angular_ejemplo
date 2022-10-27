import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaborFieldComponent } from './labor-field.component';

describe('LaborFieldComponent', () => {
  let component: LaborFieldComponent;
  let fixture: ComponentFixture<LaborFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaborFieldComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LaborFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
