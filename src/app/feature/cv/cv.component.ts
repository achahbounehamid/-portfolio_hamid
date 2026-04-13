import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-cv',
  imports: [],
  templateUrl: './cv.component.html',
  styleUrl: './cv.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CvComponent {
  cvUrl = 'assets/cv/CV_Hamid_Achahboune.pdf';

  safeCvUrl: SafeResourceUrl;
  isCvOpen = false;

  constructor(private sanitizer: DomSanitizer) {
    this.safeCvUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.cvUrl);
  }

  openCv(): void {
    this.isCvOpen = true;
  }

  closeCv(): void {
    this.isCvOpen = false;
  }
}
