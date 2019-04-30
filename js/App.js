'use strict';

import { log } from './utils';
import { Card } from './Card';
import { Provider } from './Provider';

const PROVIDERS = [
  new Provider('Diners Club International', 'pw-diners', ['36'], ['14']),
  new Provider('MasterCard', 'pw-mastercard', ['2221-2720', '51-55'], ['16']),
  new Provider('JCB', 'pw-jcb', ['3528-3589'], ['16']),
  new Provider('maestro', 'pw-maestro', ['50', '56-58', '6'], ['12-19']),
  new Provider('Discover', 'pw-discover', ['6011', '622126-622925', '644-649', '65'], ['16']),
  new Provider('American Express', 'pw-american-express', ['34', '37'], ['15']),
  new Provider('Visa', 'pw-visa', ['4'], ['13', '16', '19']),
];

export function App() { }

App.getProvider = function (cardNumber, onSuccess, onError) {
  let card = new Card(cardNumber);
  if(card.isValid()) {
    for (let provider of PROVIDERS)
      if (provider.matched(card))
        card.provider = provider;

    onSuccess(card);
  }
  else
    onError();
  
}
