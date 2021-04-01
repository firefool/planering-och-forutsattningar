import {Page} from './framework/page.js';
import {Image} from './ui/image.js';
import {Button} from './ui/button.js';
import {application} from './app.js';

export class HomePage extends Page {
    
    constructor() {
        super('Home');
    }
    
    createElement() {
        super.createElement();
        
        let i = new Image('../images/byte.jpg');
        i.appendToElement(this.element);
       
        let styleString = 'width: 300px; height: 80px; font-size: 26px; margin: 10px; margin-bottom: 55px;';
        let b = new Button('Prototype Plan');
        b.setStyleString(styleString);
        b.appendToElement(this.element);
        b.element.click(() => application.activateRoute('Prototype'));
        
        b = new Button('Business Plan');
        b.setStyleString(styleString);
        b.appendToElement(this.element);
        b.element.click(() => application.activateRoute('Business Plan'));

        b = new Button('Contact');
        b.setStyleString(styleString);
        b.appendToElement(this.element);
        b.element.click(() => application.activateRoute('Contact'));

        b = new Button('App');
        b.setStyleString(styleString);
        b.appendToElement(this.element);
        b.element.click(() => window.location.href = "../app.html");
    }
    
    getElementString() {
        return '<div style="text-align: center;"></div>';
    }
}