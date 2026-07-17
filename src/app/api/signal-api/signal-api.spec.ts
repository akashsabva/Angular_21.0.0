import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalApi } from './signal-api';

describe('SignalApi', () => {
  let component: SignalApi;
  let fixture: ComponentFixture<SignalApi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalApi]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignalApi);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
