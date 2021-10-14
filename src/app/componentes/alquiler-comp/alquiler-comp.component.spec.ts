import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlquilerCompComponent } from './alquiler-comp.component';

describe('AlquilerCompComponent', () => {
  let component: AlquilerCompComponent;
  let fixture: ComponentFixture<AlquilerCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlquilerCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlquilerCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
