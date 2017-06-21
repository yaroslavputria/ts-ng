import { Component, EventEmitter, OnInit, ViewEncapsulation } from '@angular/core';
import { Hero } from '../interfaces/hero';

import { HeroService } from '../services/hero.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    encapsulation: ViewEncapsulation.Emulated
    //providers: [HeroService] there is no need, in app.module it is already declared
})
export class AppComponent implements OnInit {
    constructor(private heroService: HeroService) {
        heroService.getHeroes()
            .then(heroes => {
                this.heroes = heroes;
            });
        //this.heroes = this.heroService.getHeroes();//??  :)
    }
    showheroes: boolean = false;
    ngOnInit() {
        //this.heroes = this.heroService.getHeroes();
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
