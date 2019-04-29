'use strict';

import { log } from './utils';
import { Card } from './Card';
import { Provider } from './Provider';

const PROVIDERS = [
  new Provider('Diners Club International', ['36'], ['14']),
  new Provider('MasterCard', ['2221-2720', '51-55'], ['16']),
  new Provider('JCB', ['3528-3589'], ['16']),
  new Provider('maestro', ['50', '56-58', '6'], ['12-19']),
  new Provider('Discover', ['6011', '622126-622925', '644-649', '65'], ['16']),
  new Provider('American Express', ['34', '37'], ['15']),
  new Provider('Visa', ['4'], ['13', '16', '19']),
  new Provider('China UnionPay', ['62'], ['16-19']),
];

export function App() { }

App.getProvider = function (cardNumber) {
  let card = new Card(cardNumber);
  
  for (let provider of PROVIDERS)
    if (provider.matched(card))
      card.provider = provider;

  return card;
}
