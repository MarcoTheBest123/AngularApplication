import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HuaweiCoverPreviewComponent } from './huawei-cover-preview.component';

describe('HuaweiCoverPreviewComponent', () => {
  let component: HuaweiCoverPreviewComponent;
  let fixture: ComponentFixture<HuaweiCoverPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HuaweiCoverPreviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HuaweiCoverPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
