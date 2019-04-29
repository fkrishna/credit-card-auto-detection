'use strict';

import { log } from './js/utils';
import { Card } from './js/Card';
import { Provider } from './js/Provider';

let $form = document.querySelector('#form');

const PROVIDERS = [
  new Provider('American Express', ['34', '37'], ['15']),
  new Provider('Discover', ['6011', '622126-622925', '644-649', '65'], ['16']),
  new Provider('MasterCard', ['2221-2720', '51-55'], ['16']),
  new Provider('Visa', ['4'], ['13', '16', '19'])
];


$form.addEventListener('submit', function(){
  let cardNumber = document.querySelector('#card-number').value;
  let card = new Card(cardNumber);
  card.provider = getProvider(card, PROVIDERS);
  log(card);
});

function getProvider(card, PROVIDERS) {
  for(let provider of PROVIDERS)
    if(provider.matched(card))
      return provider;
  return null;
}
