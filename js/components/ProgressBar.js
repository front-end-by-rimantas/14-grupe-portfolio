class ProgressBar {
    constructor( parentDOM, title, value ) {
        this.parentDOM = parentDOM;
        this.DOM = null;
        this.title = title;
        this.value = value;
        this.canPlay = true;

        this.init();
    }

    init() {
        if ( !this.parentDOM ||
             !this.title ||
             typeof(this.value) !== 'number' ||
             this.value < 0 ||
             this.value > 100 ) {
            return;
        }
        this.render();
    }

    render() {
        this.parentDOM.insertAdjacentHTML('beforeend', `
            <div class="progress-bar">
                <div class="texts">
                    <div class="label">${this.title}</div>
                    <div class="value">${this.value}%</div>
                </div>
                <div class="bar">
                    <div class="value" style="width: ${this.value}%;">
                        <div class="loading"></div>
                    </div>
                </div>
            </div>`);
        this.DOM = this.parentDOM.querySelector('.progress-bar:last-child');
    }

    isVisible() {
        const scrollY = window.scrollY;
        const positionY = this.DOM.offsetTop - window.innerHeight + this.DOM.offsetHeight;
        return positionY < scrollY ? true : false;
    }

    animate() {
        if ( this.canPlay ) {
            this.DOM.classList.add('play');
            this.canPlay = false;
        }
    }
}

export default ProgressBar;