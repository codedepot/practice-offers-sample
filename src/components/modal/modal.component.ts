import { TAG_CLASSES, OFFER_LIMIT } from './../../model/constants.config';
import { Offer } from './../../model/offer.model';
import { Component, OnChanges, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnChanges {
  tagClass:string;
  @Input() offer:Offer;
  @Input() selection:{};
  @Output() toggleModal = new EventEmitter();
  @Output() selected = new EventEmitter();
  numSelected;
  offerLimit = OFFER_LIMIT;

  isSelected = false;
  constructor() { }
  
  ngOnChanges() {
    if(this.offer){
      this.tagClass = TAG_CLASSES[this.offer.tag];
      if(this.selection[this.offer.id]){
        this.isSelected = true;
      }else{
        this.isSelected = false;
      }
      this.numSelected = Object.keys(this.selection).length;
    }
  }

  dismissModal(){
    this.toggleModal.emit("false");
  }
  modalClick($event){
    $event.stopImmediatePropagation();
  }

  onDeselect(){
    this.toggleModal.emit("false");
    this.selected.emit("" + this.offer.id);
  }

  onSelected(){
    this.toggleModal.emit("false");
    this.selected.emit("" + this.offer.id);
  }
}
