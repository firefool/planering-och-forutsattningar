import {Page} from './framework/page.js';
import {Image} from './ui/image.js';
import {Button} from './ui/button.js';
import {application} from './app.js';

export class ContactPage extends Page {
    
    constructor() {
        super('Contact');
    }
    
    createElement() {
        super.createElement();
        }
    
    getElementString() {
        return `<div style="text-align: center;">
                    <h3>Contact</h3>
                    <p class="contentText">Contact me at: <a class="mailLink" href="mailto:jonasyzermans@gmail.com">Jonasyzermans@gmail.com</a> </p>
                </div>`;
    }
}