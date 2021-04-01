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

        let i = new Image('../images/underkonstruktion2.png');
        i.appendToElement(this.element);

    }
    
    getElementString() {
        return `<div style="margin: 20px";><h3>Affärsplan - Bytesappen - Sammanfattning</h3>
        <p>
        Bytesappen är en simpel applikation för att tillåta användare att hitta andra lokala användare som har produkter, prylar eller tjänster som de är villiga att byta. 
        Målet med projektet är att utveckla lokala marknader för byteshandel vilket kommer hjälpa till att minska miljöpåverkan som kommer utav transporter och onödiga köp. 
        </p>

        </div>`;
    }
}