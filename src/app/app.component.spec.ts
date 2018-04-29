import { HttpModule } from '@angular/http';
import { OfferItemComponent } from './../components/offer-item/offer-item.component';
import { OfferService } from './../service/offer.service';
import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ProgressBarComponent } from '../components/progress-bar/progress-bar.component';
import { ModalComponent } from '../components/modal/modal.component';
import { HttpClient } from '@angular/common/http';
import { OFFER_LIMIT } from '../model/constants.config';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        ProgressBarComponent,
        OfferItemComponent,
        ModalComponent,
      ],
      imports:[HttpModule],
      providers:[OfferService, HttpClient]
    })
    .compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('BabyFirst');
  }));

  it('should be able to select and deselect', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    fixture.componentInstance.onSelected(1);
    expect(fixture.componentInstance.selection).toEqual({1:true});
    fixture.componentInstance.onSelected(2);
    expect(fixture.componentInstance.selection).toEqual({1:true, 2:true});
    fixture.componentInstance.onSelected(2);
    expect(fixture.componentInstance.selection).toEqual({1:true});
  }));

  it('should keep selection within limit', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    for(var i = 0; i<OFFER_LIMIT+3; i++){
      fixture.componentInstance.onSelected(i);  
    }
    expect(Object.keys(fixture.componentInstance.selection).length).toEqual(OFFER_LIMIT);
  }));



  it('should show alert when over limit and be able to close', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    for(var i = 0; i<OFFER_LIMIT+3; i++){
      fixture.componentInstance.onSelected(i);  
    }
    expect(fixture.componentInstance.showAlert).toEqual(true);
    fixture.componentInstance.dismissAlert();
    expect(fixture.componentInstance.showAlert).toEqual(false);
  }));

  it('should be able to view and close modal', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const offer =         {
        "id": 1,
        "name": "Toothpaste Strawberry Mint",
        "description": "Our Kids Toothpaste delivers delightful, fruity freshness that kids love! Our fluoride-free formula helps brighten teeth, promote healthy teeth and gums, and fight tartar buildup.",
        "image": "/offers/img_toothpaste.jpg",
        "tag": "All Ages",
        "brand": "The Honest Company",
        "logo" : "/logos/img_logo.png"
    };
    fixture.componentInstance.toggleModal({
      show:true,
      offer:offer
    })
    expect(fixture.componentInstance.showModal).toEqual(true);
    expect(fixture.componentInstance.modalOffer).toEqual(offer);    
    fixture.componentInstance.toggleModal({show:false, offer:null});
    expect(fixture.componentInstance.showModal).toEqual(false);
  }));
});
