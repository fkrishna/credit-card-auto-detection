'use strict';

// CARD OBJECT


export function Card(cardNumber) {
  this.number = cardNumber;
  this.length = cardNumber.length;
  this.provider = null;
}

Card.prototype.isValid = function(){
  return this.checksum() % 10 === 0;
};

Card.prototype.checksum = function(){
  let sum = 0, x = 0, n = 0;
  let tmp = this.number.split('').reverse();
  
  for(let i = 0, length = tmp.length; i < length; i++) {
    x = parseInt(tmp[i]);
    if(i % 2 != 0){
      n = ((x * 2) > 9) ? (x * 2) - 9 : (x * 2);
      sum += n;
    }
    else
       sum += x;
  } 
  return sum;
};

Card.prototype.toString = function(n){
  n = (n !== 0 && n !== undefined) ? n : this.number.length;
  return this.number.substring(0, n); 
};


// if(i % 2 != 0){
//       n = ((x * 2) > 9) ? x - 9 : (x * 2);
//       sum += n;
//       console.log(n);
//     }    
//     else
//       sum += x;