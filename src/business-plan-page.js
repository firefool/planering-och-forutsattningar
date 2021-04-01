import {Page} from './framework/page.js';
import {Image} from './ui/image.js';
import {Button} from './ui/button.js';
import {application} from './app.js';

export class BusinessPlanPage extends Page {
    
    constructor() {
        super('Business Plan');
    }
    
    createElement() {
        super.createElement();
        }
    
    getElementString() {
        return '<div style="text-align: center;"><h3>Business Plan</h3></div>';
    }
}