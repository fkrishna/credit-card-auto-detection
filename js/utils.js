'use strict';

export function toInt(arrayStr){
  return arrayStr.map(els => els.map(str => parseInt(str)) )
}

export function log(data){
  console.log(data);
}

export function countDigit(number) { 
    return Math.floor(Math.log10(number) + 1); 
} 

