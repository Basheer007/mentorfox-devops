import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfectForSectionComponent } from './perfect-for-section.component';

describe('PerfectForSectionComponent', () => {
  let component: PerfectForSectionComponent;
  let fixture: ComponentFixture<PerfectForSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PerfectForSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerfectForSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
