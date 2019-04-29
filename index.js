'use strict';

import './style.css';

import { log } from './js/utils';
import { Card } from './js/Card';
import { App } from './js/App'

let $form = document.querySelector('#form');
let $logo = document.querySelector('#logo');
let $notif = document.querySelector('#notif');

$form.addEventListener('submit', function(){
  let cardNumber = document.querySelector('#card-number').value;
  let card = App.getProvider(cardNumber);
  // $provider.textContent = (card.provider) ? card.provider.name : 'Invalid';
  $logo.className = 'pw ' + card.provider.logo;
  
  log(card);
});