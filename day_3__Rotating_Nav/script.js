'use strict';


const container = document.querySelector('.container');
const buttonClose = document.getElementById('close');
const buttonOpen = document.getElementById('open');

buttonOpen.addEventListener('click', () => container.classList.add('show-nav'))
buttonClose.addEventListener('click', () => container.classList.remove('show-nav'))

