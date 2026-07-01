import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Stawberry } from './stawberry';

describe('Stawberry', () => {
  let component: Stawberry;
  let fixture: ComponentFixture<Stawberry>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Stawberry],
    }).compileComponents();

    fixture = TestBed.createComponent(Stawberry);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
