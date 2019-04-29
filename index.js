'use strict';

import { log } from './js/utils';
import { Card } from './js/Card';
import { App } from './js/App'

let $form = document.querySelector('#form');
let $provider = document.querySelector('#provider');

$form.addEventListener('submit', function(){
  let cardNumber = document.querySelector('#card-number').value;
  let card = new Card(cardNumber);
  card.provider = App.getProvider(card);
  $provider.textContent = (card.provider) ? card.provider.name : 'Invalid';
  log(card);
});