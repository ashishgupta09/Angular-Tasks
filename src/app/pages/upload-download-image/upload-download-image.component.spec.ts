import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadDownloadImageComponent } from './upload-download-image.component';

describe('UploadDownloadImageComponent', () => {
  let component: UploadDownloadImageComponent;
  let fixture: ComponentFixture<UploadDownloadImageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UploadDownloadImageComponent]
    });
    fixture = TestBed.createComponent(UploadDownloadImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
