"use strict";
import SectionHeading from './SectionHeading.js';
import Achievements from './Achievements.js';

// find all attr with 'data-h2' to create H2 elements
const allDataH2 = document.querySelectorAll('[data-h2]');
for ( let i=0; i<allDataH2.length; i++ ) {
    new SectionHeading( allDataH2[i] );
}

new Achievements('#achievements > .row');