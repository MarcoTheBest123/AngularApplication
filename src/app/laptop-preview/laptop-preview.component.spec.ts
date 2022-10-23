import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaptopPreviewComponent } from './laptop-preview.component';

describe('LaptopPreviewComponent', () => {
  let component: LaptopPreviewComponent;
  let fixture: ComponentFixture<LaptopPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaptopPreviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LaptopPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
