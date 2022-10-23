import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallCupPreviewComponent } from './small-cup-preview.component';

describe('SmallCupPreviewComponent', () => {
  let component: SmallCupPreviewComponent;
  let fixture: ComponentFixture<SmallCupPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmallCupPreviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmallCupPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
