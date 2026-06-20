import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Createcomponent } from './createcomponent';

describe('Createcomponent', () => {
  let component: Createcomponent;
  let fixture: ComponentFixture<Createcomponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Createcomponent],
    }).compileComponents();

    fixture = TestBed.createComponent(Createcomponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
