"use strict";
import data from '../data/achievements-data.js';

class Achievements {
    constructor( target ) {
        this.target = target;
        this.DOMnumbers = null;
        this.numbersAnimated = false;

        this.render();
        this.scroll();
    }

    render() {
        const DOM = document.querySelector(this.target);
        if ( !DOM ) {
            throw 'ERROR: OMG.. go fix Achievements!!';
        }

        let HTML = '';

        for ( let i=0; i<data.length; i++ ) {
            const ach = data[i];
            HTML += `
                <div class="col-3 cards">
                    <i class="fa fa-${ach.icon}"></i>
                    <div class="number" data-num="${ach.number}">0</div>
                    <h4>${ach.title}</h4>
                </div>`;
        }
        DOM.innerHTML = HTML;
        this.DOMnumbers = DOM.querySelectorAll('.number');
    }

    scroll() {
        window.addEventListener('scroll', () => {
            const height = this.DOMnumbers[0].offsetTop - window.innerHeight;
            if ( height < window.scrollY && !this.numbersAnimated ) {
                const totalTime = 3000;
                const framesPerSecond = 24;
                const framesCount = (totalTime / 1000) * framesPerSecond;
                let count = 0;
                
                const clock = setInterval(() => {
                    for ( let i=0; i<this.DOMnumbers.length; i++ ) {
                        this.DOMnumbers[i].innerText = Math.ceil(count * parseInt(this.DOMnumbers[i].dataset.num) / framesCount);
                    }
                    count++;
                    if ( count > framesCount ) {
                        clearInterval(clock);
                    }
                }, 1000 / framesPerSecond);

                this.numbersAnimated = true;
            }
        })
    }
}

export default Achievements;