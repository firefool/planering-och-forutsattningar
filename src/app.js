import {Button} from './ui/button.js';
import {Image} from './ui/image.js';
import {TitleBar} from './ui/title-bar.js';

import { ApplicationBase } from './framework/application-base.js';
import { HomePage } from './home-page.js';
import { PrototypePage } from './prototype-page.js';
import { ContactPage } from './contact-page.js';
import { BusinessPlanPage} from './business-plan-page.js';

export class App extends ApplicationBase {
    
    constructor() {
        super('Bytesappen - Product Idea');
        
        this.addRoute('Home', new HomePage(), true);
        this.addRoute('Prototype', new PrototypePage());
        this.addRoute('Business Plan', new BusinessPlanPage());
        this.addRoute('Contact', new ContactPage());
    }
}


export let application = new App();
application.show($('body'));

