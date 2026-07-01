import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Chocolate } from './chocolate';

describe('Chocolate', () => {
  let component: Chocolate;
  let fixture: ComponentFixture<Chocolate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Chocolate],
    }).compileComponents();

    fixture = TestBed.createComponent(Chocolate);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
