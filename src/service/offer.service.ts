import { HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class OfferService {

  constructor(
  private http: Http) { }


  getOffers():Promise<any>{
    return this.http.get("../assets/resource/offers.json").toPromise();
    
  }
}
