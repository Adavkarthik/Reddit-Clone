import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Showcomments } from './showcomments';

describe('Showcomments', () => {
  let component: Showcomments;
  let fixture: ComponentFixture<Showcomments>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Showcomments],
    }).compileComponents();

    fixture = TestBed.createComponent(Showcomments);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
