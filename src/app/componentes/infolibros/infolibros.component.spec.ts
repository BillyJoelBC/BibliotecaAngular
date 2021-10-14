import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfolibrosComponent } from './infolibros.component';

describe('InfolibrosComponent', () => {
  let component: InfolibrosComponent;
  let fixture: ComponentFixture<InfolibrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfolibrosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfolibrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
