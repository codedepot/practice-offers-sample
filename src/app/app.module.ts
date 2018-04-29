import { OfferService } from './../service/offer.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ProgressBarComponent } from '../components/progress-bar/progress-bar.component';
import { OfferItemComponent } from '../components/offer-item/offer-item.component';
import { HttpModule } from '@angular/http';
import { ModalComponent } from '../components/modal/modal.component';


@NgModule({
  declarations: [
    AppComponent,
    ProgressBarComponent,
    OfferItemComponent,
    ModalComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [OfferService],
  bootstrap: [AppComponent]
})
export class AppModule { }
