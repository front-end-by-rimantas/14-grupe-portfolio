"use strict";
import Header from './components/Header.js';
import SectionHeading from './components/SectionHeading.js';
import Achievements from './components/Achievements.js';
import Gallery from './components/Gallery.js';

new Header('header nav');

const DOMhamburger = document.querySelector('.hamburger');
DOMhamburger.addEventListener('click', () => {
    document.querySelector('header nav').classList.toggle('show');
})

// find all attr with 'data-h2' to create H2 elements
const allDataH2 = document.querySelectorAll('[data-h2]');
for ( let i=0; i<allDataH2.length; i++ ) {
    new SectionHeading( allDataH2[i] );
}

new Achievements('#achievements > .row');

new Gallery('#works > .row:nth-child(3) > .col-12');