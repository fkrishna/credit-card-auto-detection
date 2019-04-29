'use strict';

/** 
 * PROVIDER OBJECT
*/

import * as Utils from './utils';

export function Provider(name, logo, binRanges, lengthRanges){
  this.name = name;
  this.logo = logo;
  this.binRanges = this.parse(binRanges);
  this.lengthRanges = this.parse(lengthRanges); 
}

Provider.prototype.parse = function(rangesFormat){
  let ranges = [];
  for(let rangestr of rangesFormat) {
    ranges.push(rangestr.split('-'));
  }
  ranges = Utils.toInt(ranges);
  return ranges;
}

Provider.prototype.matched = function(card) {
  return (this.matchedBin(card) && this.matchedLength(card)) ? true : false;
}

Provider.prototype.matchedBin = function(card) {
  for(let i = 0, n = this.binRanges.length; i < n; i++) {
    let ranges = this.binRanges[i];
    let ndigit = Utils.countDigit(ranges[0]);
    let bin = card.toString(ndigit);
    
    if(this.binRanges[i].length === 2) 
      if(bin >= ranges[0] && bin <= ranges[1])
        return true;

    if(bin == ranges[0]) 
      return true;
  }
  return false;
}

Provider.prototype.matchedLength = function(card) {
  for(let i = 0, n = this.lengthRanges.length; i < n; i++) {
    let ranges = this.lengthRanges[i];
    
    if(this.lengthRanges[i].length === 2) 
      if(card.length >= ranges[0] && card.length <= ranges[1])
        return true;

    if(card.length == ranges[0]) 
      return true;
  }
  return false;
}
 


