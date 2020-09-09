import {Component} from '@angular/core';
import { from } from 'rxjs';

@Component({
    selector: 'app-body',
    templateUrl: './body.component.html'
})
export class BodyComponent{
    show=true;
    frase : any={
        message:'The most basic list group is an unordered list with list items and the proper classes. Build upon it with the options that follow, or with your own CSS as needed.',
        author:'Irwinet'
    };   
    peoples:string[] = ['Spiderman','Venon', 'Dr. Octupus'];
}