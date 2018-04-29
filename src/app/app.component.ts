import { Offer, ModalToggle } from './../model/offer.model';
import { OfferService } from './../service/offer.service';
import { PROGRESS_OPTIONS, OFFER_LIMIT } from './../model/constants.config';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  progress = 1;
  offersSelected = 0;
  progressOptions = PROGRESS_OPTIONS;
  offerLimit = OFFER_LIMIT;
  currentOffers:Array<Offer>;
  selection = {};
  showModal = false;
  showAlert = false;
  modalOffer:Offer = null;

  constructor(private offerService: OfferService){

  }
  ngOnInit(){
    //get offerings from mock service
    this.offerService.getOffers().then(res =>{
      this.currentOffers = res.json().products;
    }).catch(err => console.log(err));
  }

  onSelected(id){
    if(this.offersSelected === 5 && !this.selection[id]){
      this.showAlert = true;
      setTimeout(() =>{
        this.showAlert = false;
      }, 3000)
    }else if(!this.selection[id]){
      this.selection[id] = true;
      this.offersSelected++;
    }else if(this.selection[id]){
      delete this.selection[id];
      this.offersSelected--;
    }
  }
  dismissAlert(){
    this.showAlert = false;
  }

  toggleModal(modalToggle:ModalToggle){
    if(modalToggle.show === true){
      this.showModal = true;
      this.modalOffer = modalToggle.offer;
    }else{
      this.showModal = false;
      this.modalOffer = null;
    }
  }
  onComplete(){
    window.location.href = "https://sampler.io/";
  }
}
