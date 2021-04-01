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
        return `<div style="margin: 20px;"><h3>Bytesappen - Produktprototyp</h3> 
        <p>
        Applikationen som jag vill utveckla är i grund och botten en simpelt digitalt marknadstorg.
        Användaren ska kunna registrera sig med namn och plats (närmsta samhälle t.ex.). Därefter ska användaren kunna lägga upp produkter, prylar och tjänster denna har att byta bort. Användaren ska även kunna skriva en lista på vad för sorts produkter, prylar och tjänster denna är intresserad utav, detta för att göra det lättare att hitta bytesparterns.  
        Användaren ska kunna se vad för produkter, prylar och tjänster som andra användare har att erbjuda och detta ska kunna sorteras efter avstånd till användaren. 
        För att tillhandahålla byteshandeln så ska användare kunna skicka meddelanden till varandra. 
        </p>
        <p>
        För att utveckla denna prototyp behöver det skapas en simpel backend för registrering av användare och sparning av deras annonser. 
        Implementering av t.ex Google Maps kan användas för att kunna se vart användare är lokaliserade. 
        Själva applikationen ska vara lättnavigerad och mobilanpassad men kräver i sig inga avancerade webbtekniker.
        </p>
        </div>`;
    }
}