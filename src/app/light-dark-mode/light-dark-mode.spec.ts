import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LightDarkMode } from './light-dark-mode';

describe('LightDarkMode', () => {
  let component: LightDarkMode;
  let fixture: ComponentFixture<LightDarkMode>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LightDarkMode]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LightDarkMode);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
