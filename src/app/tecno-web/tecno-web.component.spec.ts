import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TecnoWebComponent } from './tecno-web.component';

describe('TecnoWebComponent', () => {
  let component: TecnoWebComponent;
  let fixture: ComponentFixture<TecnoWebComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TecnoWebComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TecnoWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
