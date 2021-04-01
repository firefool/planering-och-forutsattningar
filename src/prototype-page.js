import {Page} from './framework/page.js';
import {Image} from './ui/image.js';
import {Button} from './ui/button.js';
import {application} from './app.js';

export class PrototypePage extends Page {
    
    constructor() {
        super('Prototype Page');
    }
    
    createElement() {
        super.createElement();
        }
    
    getElementString() {
        return '<div style="text-align: center;">TEST</div>';
    }
}