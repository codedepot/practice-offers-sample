import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';

import { ProgressBarComponent } from './progress-bar.component';
import { PROGRESS_OPTIONS } from '../../model/constants.config';
import { DomSanitizer, BrowserModule } from '@angular/platform-browser';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import {  Component, OnInit, Input } from '@angular/core';

@Component({  
  selector: 'app-progress-bar',
  template: '<div></div>'})
class mockProgressBarComponent {
  progressOptions;
  progress;
  gradientLevel = 50;
  gradientValue;
  constructor(){}
  init() {
    let percentage = ((this.progress/(this.progressOptions.length-1)))*100;
    this.gradientLevel = percentage;
    this.gradientValue = 'background: linear-gradient(0.25turn, #39ca74, #66e4a7 ' + percentage +'%, #eaeaea 0% );'
  }

}
describe('ProgressBarComponent', () => {
  let component: mockProgressBarComponent;
  let fixture: ComponentFixture<mockProgressBarComponent>;
  //let mockDomSanitizer;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ mockProgressBarComponent ],
      //providers: [DomSanitizer]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(mockProgressBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('create an instance', inject([DomSanitizer], (domSanitizer: DomSanitizer) => {
    expect(component).toBeTruthy();
  })); 


  it('should be halfway for default progress bar', inject([DomSanitizer], (domSanitizer: DomSanitizer) => {
    fixture.componentInstance.progressOptions = PROGRESS_OPTIONS;
    fixture.componentInstance.progress = 1;
    fixture.componentInstance.init();
    expect(fixture.componentInstance.gradientLevel).toEqual(50);
  })); 

  it('should be dynamic progress', inject([DomSanitizer], (domSanitizer: DomSanitizer) => {
    fixture.componentInstance.progressOptions = ["first", "second", "third", "fourth"];
    fixture.componentInstance.progress = 1;
    fixture.componentInstance.init();
    expect(Math.round(fixture.componentInstance.gradientLevel)).toEqual(33);
    fixture.componentInstance.progress = 2;
    fixture.componentInstance.init();
    expect(Math.round(fixture.componentInstance.gradientLevel)).toEqual(67);

    //for 5 options
    fixture.componentInstance.progressOptions = ["first", "second", "third", "fourth", "fifth"];
    fixture.componentInstance.progress = 1;
    fixture.componentInstance.init();
    expect(Math.round(fixture.componentInstance.gradientLevel)).toEqual(25);
    fixture.componentInstance.progress = 2;
    fixture.componentInstance.init();
    expect(Math.round(fixture.componentInstance.gradientLevel)).toEqual(50);
    fixture.componentInstance.progress = 3;
    fixture.componentInstance.init();
    expect(Math.round(fixture.componentInstance.gradientLevel)).toEqual(75);
  }));
});
