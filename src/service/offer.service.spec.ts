import { HttpModule } from '@angular/http';
import { TestBed, inject } from '@angular/core/testing';

import { OfferService } from './offer.service';

describe('OfferService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OfferService],
      imports:[HttpModule]
    });
  });

  it('should be created', inject([OfferService], (service: OfferService) => {
    expect(service).toBeTruthy();
  }));

});
