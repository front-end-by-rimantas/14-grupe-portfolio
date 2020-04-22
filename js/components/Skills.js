import data from '../data/skills-data.js';
import ProgressBar from './ProgressBar.js';

class Skills {
    constructor( target ) {
        this.target = target;
        this.DOM = null;
        this.bars = [];

        this.init();
    }

    init() {
        const DOM = document.querySelector(this.target);
        if ( !DOM ) {
            throw 'ERROR: get me some good place to show off my skills ;)';
        }
        this.DOM = DOM;

        this.render();
        this.scroll();
    }

    render() {
        for ( let i=0; i<data.length; i++ ) {
            this.bars.push( new ProgressBar( this.DOM, data[i].title, data[i].value ) );
        }
    }

    scroll() {
        window.addEventListener('scroll', () => {
            for ( let i=0; i<this.bars.length; i++ ) {
                if ( this.bars[i].isVisible() ) {
                    this.bars[i].animate()
                }
            }
        })
    }
}

export default Skills;