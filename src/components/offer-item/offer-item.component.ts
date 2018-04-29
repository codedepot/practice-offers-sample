import { ModalToggle } from './../../model/offer.model';
import { TAG_CLASSES } from './../../model/constants.config';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Offer } from '../../model/offer.model';

@Component({
  selector: 'app-offer-item',
  templateUrl: './offer-item.component.html',
  styleUrls: ['./offer-item.component.scss']
})
export class OfferItemComponent implements OnInit {
  @Input() offer:Offer;
  @Input() isSelected = false;
  @Output() selected = new EventEmitter();
  @Output() viewInfo = new EventEmitter<ModalToggle>();
  tagClass;
  constructor() { }

  ngOnInit() {
    this.tagClass = TAG_CLASSES[this.offer.tag];
  }

  onClick($event){
    this.selected.emit("" + this.offer.id);
  }
  onInfo($event){
    $event.stopImmediatePropagation();
    this.viewInfo.emit({show:true, offer:this.offer});
  }

}
