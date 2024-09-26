import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuarenteeSectionComponent } from './guarentee-section.component';

describe('GuarenteeSectionComponent', () => {
  let component: GuarenteeSectionComponent;
  let fixture: ComponentFixture<GuarenteeSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GuarenteeSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuarenteeSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
