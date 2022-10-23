import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IphoneCoverPreviewComponent } from './iphone-cover-preview.component';

describe('IphoneCoverPreviewComponent', () => {
  let component: IphoneCoverPreviewComponent;
  let fixture: ComponentFixture<IphoneCoverPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IphoneCoverPreviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IphoneCoverPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
