'use strict';

// CARD OBJECT

export function Card(cardNumber) {
  this.number = cardNumber.trim();
  this.length = cardNumber.length;
  this.provider = null;
}

/**
 *  According to LUNH's ALGORITHM if the
 * checksum modulo 10 is 0, the number is valid!
 */
Card.prototype.isValid = function(){
  return ! Number.isNaN(this.number) && (this.checksum() % 10 === 0);
};

/**
 * According to Luhn’s algorithm, you can determine if a credit card number
 * is syntactically valid as follows:
 * 
 * - Multiply every other digit by 2, starting with the number’s second-to-last digit
 * - Then add those products’ digits together.
 * - Add the sum to the sum of the digits that weren’t multiplied by 2.
 * - If the total modulo 10 is 0, the number is valid!
 * 
 * e.g: VISA: 4003600000000014
 * let’s put every other digit in parenthesis, 
 * starting with the number’s second-to-last digit:
 *    
 *    (4) 0 (0) 3 (6) 0 (0) 0 (0) 0 (0) 0 (0) 0 (1) 4
 * 
 * - let’s multiply each of digits in parentesis by 2:
 * 
 *    1•2 + 0•2 + 0•2 + 0•2 + 0•2 + 6•2 + 0•2 + 4•2
 * 
 * - let’s add those products’ digits (i.e., not the products themselves) together:
 * 
 *    2 + 0 + 0 + 0 + 0 + 1 + 2 + 0 + 8 = 13
 * 
 * - let’s add that sum (13) to the sum of the digits that weren’t multiplied by 2 
 *  (starting from the end):
 * 
 *    13 + 4 + 0 + 0 + 0 + 0 + 0 + 3 + 0 = 20
 * 
 *  the last digit in that sum (20) is a 0, so the credit card is legit!
 * 
 */

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
