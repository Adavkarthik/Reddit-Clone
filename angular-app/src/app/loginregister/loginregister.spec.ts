import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Loginregister } from './loginregister';

describe('Loginregister', () => {
  let component: Loginregister;
  let fixture: ComponentFixture<Loginregister>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Loginregister],
    }).compileComponents();

    fixture = TestBed.createComponent(Loginregister);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
