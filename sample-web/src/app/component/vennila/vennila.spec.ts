import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Vennila } from './vennila';

describe('Vennila', () => {
  let component: Vennila;
  let fixture: ComponentFixture<Vennila>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Vennila],
    }).compileComponents();

    fixture = TestBed.createComponent(Vennila);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
