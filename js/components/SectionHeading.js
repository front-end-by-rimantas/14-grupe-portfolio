"use strict";

class SectionHeading {
    constructor( element ) {
        this.element = element;
        this.d = element.dataset;
        this.text = this.d.h2;

        this.render();
    }

    render() {
        const classList = [];
        this.d.h2Align ? classList.push(this.d.h2Align) : '';
        this.d.h2Line === 'false' ? classList.push('no-line') : '';
        this.d.h2Color ? classList.push(this.d.h2Color) : '';

        const classNames = classList.length > 0 ? `class="${classList.join(' ')}"` : '';

        const HTML = `<h2 ${classNames}>${this.text}</h2>`;
        this.element.insertAdjacentHTML('afterbegin', HTML);
    }
}

export default SectionHeading;