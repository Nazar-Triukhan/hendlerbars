import cofee from'./cofee.json'
import cofeeTamplet from './cofee-tamplet.hbs'
import { log } from 'handlebars';

// console.log(...cofee);
// console.log(cofeeTamplet);



const listRf = document.querySelector('.cofe__list')

listRf.innerHTML = cofeeTamplet({cofee})