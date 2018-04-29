export interface Offer{  
  brand:string;
  description:string;
  id:number;
  image:string;
  logo:string;
  name:string;
  tag:string;
}

export interface ModalToggle{
  show:Boolean;
  offer:Offer;
}