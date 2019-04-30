'use strict';

import './style.css';

import { log } from './js/utils';
import { Card } from './js/Card';
import { App } from './js/App'

let $form = document.querySelector('#form');
let $logo = document.querySelector('#logo');
let $listProv = document.querySelectorAll('#list-provider i');
let old;

$form.addEventListener('submit', function(){
  let cardNumber = document.querySelector('#card-number').value;
  let card = App.getProvider(cardNumber);
  
  log(card);
  renderer(card);
});

function renderer(card) {
  $logo.classList.remove(old);
  old = card.provider.logo;
  $logo.classList.add('pw')
  $logo.classList.add(card.provider.logo);
  for(let i = 0, n = $listProv.length; i < n; i++) {
    $listProv[i].classList.remove('active');
    if($listProv[i].classList[1] === card.provider.logo)
      $listProv[i].classList.add('active');
  }
}