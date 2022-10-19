import {
    Component
} from '../core/component';

export class HeaderComponent extends Component {
    constructor(id) {
        super(id);
    }

    init() {
        if (localStorage.getItem("visited")) {
            this.hide();
        }
        const btn = document.querySelector('.get-started');
        btn.addEventListener('click', startClickHandler.bind(this));
    }
}

function startClickHandler() {
    localStorage.setItem('visited', "true");
    this.hide();
}