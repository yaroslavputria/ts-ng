import { Component, Output, EventEmitter } from '@angular/core';
import { Hero } from '../interfaces/hero';
import { OnInit } from '@angular/core';

const HEROES: Hero[] = [
    { id: 1, name: 'WanderWoman' },
    { id: 11, name: 'Mr. Nice' },
    { id: 12, name: 'Narco' },
    { id: 13, name: 'Bombasto' },
    { id: 14, name: 'Celeritas' },
    { id: 15, name: 'Magneta' },
    { id: 16, name: 'RubberMan' },
    { id: 17, name: 'Dynama' },
    { id: 18, name: 'Dr IQ' },
    { id: 19, name: 'Magma' },
    { id: 20, name: 'Tornado' }
];

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    showheroes: boolean = false;
    ngOnInit() {
        this.heroes = HEROES;
    }
    title: string = 'Angular is here!';
    heroes: Hero[];
    selectedHero: Hero;


    onSelect(hero: Hero): void {
        this.selectedHero = hero;
    }

    num: number = 23;

    updateNum(e) {
        this.num = parseInt(e);
    }
}
