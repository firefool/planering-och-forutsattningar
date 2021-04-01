import {BaseElement} from './base-element.js';

export class Footer extends BaseElement {
    
    constructor() {
        super();
    }

    getElementString() {
        return `
                <div class="footer">
                <p>Fancy Footer </p>
                </div>
        `;
    }
}