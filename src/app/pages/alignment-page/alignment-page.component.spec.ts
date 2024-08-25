import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlignmentPageComponent } from './alignment-page.component';

describe('AlignmentPageComponent', () => {
  let component: AlignmentPageComponent;
  let fixture: ComponentFixture<AlignmentPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlignmentPageComponent]
    });
    fixture = TestBed.createComponent(AlignmentPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
