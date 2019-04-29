'use strict';

// CARD OBJECT


export function Card(cardNumber) {
  this.number = cardNumber;
  this.length = cardNumber.length;
  this.provider = null;
}

Card.prototype.isValid = function(){
  return true;
};

Card.prototype.toString = function(n){
  n = (n !== 0 && n !== undefined) ? n : this.number.length;
  return this.number.substring(0, n); 
};


