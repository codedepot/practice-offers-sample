import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer, SafeResourceUrl, SafeUrl} from '@angular/platform-browser';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements OnInit {
  @Input() progressOptions;
  @Input() progress;
  gradientLevel = 50;
  gradientValue;
  constructor(
    private sanitizer: DomSanitizer
  ) { 

  }

  ngOnInit() {
    let percentage = ((this.progress/(this.progressOptions.length-1)))*100;
    this.gradientLevel = percentage;
    this.gradientValue = this.sanitizer.bypassSecurityTrustStyle(
      'background: linear-gradient(0.25turn, #39ca74, #66e4a7 ' + percentage +'%, #eaeaea 0% );'
    );

  }

}
