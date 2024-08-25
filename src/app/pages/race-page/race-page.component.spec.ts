import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RacePageComponent } from './race-page.component';

describe('RacePageComponent', () => {
  let component: RacePageComponent;
  let fixture: ComponentFixture<RacePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RacePageComponent]
    });
    fixture = TestBed.createComponent(RacePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
