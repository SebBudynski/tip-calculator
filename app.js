'use strict';

const customBtn = document.querySelector('#custom');
const customInput = document.querySelector('#numberInput')


customBtn.addEventListener('click', () => {
    customBtn.classList.add('hidden');
    customInput.type= 'number';
    numberInput.focus();
});

