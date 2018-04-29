import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ModalComponent } from './modal.component';
import { By } from '@angular/platform-browser';


const offerSample = {
  "id": 1,
  "name": "Toothpaste Strawberry Mint",
  "description": "Our Kids Toothpaste delivers delightful, fruity freshness that kids love! Our fluoride-free formula helps brighten teeth, promote healthy teeth and gums, and fight tartar buildup.",
  "image": "/offers/img_toothpaste.jpg",
  "tag": "All Ages",
  "brand": "The Honest Company",
  "logo" : "/logos/img_logo.png"
};

describe('ModalComponent', () => {
  let component: ModalComponent;
  let fixture: ComponentFixture<ModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show "Select Offer" by default', async(() => {
    const fixture = TestBed.createComponent(ModalComponent);
    fixture.componentInstance.offer = offerSample;
    fixture.detectChanges();
    const compiled = fixture.debugElement;
    expect(compiled.queryAll(By.css(".bottom-btn-container button"))[0].nativeElement.textContent.trim()).toEqual('Select Offer');
  }));

  it('should show "Deselect Offer" if already part of selection', async(() => {
    const fixture = TestBed.createComponent(ModalComponent);
    fixture.componentInstance.offer = offerSample;
    fixture.componentInstance.selection = {1:true};
    fixture.detectChanges();
    const compiled = fixture.debugElement;
    compiled.nativeElement;
    expect(compiled.queryAll(By.css(".bottom-btn-container button"))[0].nativeElement.textContent.trim()).toEqual('Select Offer');
  }));
});
