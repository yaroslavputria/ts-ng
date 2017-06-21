import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { Hero } from '../../interfaces/hero';
import { HeroService } from '../../services/hero.service';

@Component({
    selector: 'heroes',
    templateUrl: './heroes.component.html'
})
export class HeroesCmp implements OnInit {
    constructor(private heroService: HeroService, private router: Router,) {
        heroService.getHeroes()
            .then(heroes => {
                this.heroes = heroes;
            });
        //this.heroes = this.heroService.getHeroes();//??  :)
    }
    showheroes: boolean = true;
    ngOnInit() {
        //this.heroes = this.heroService.getHeroes();
    }
    heroes: Hero[];
    selectedHero: Hero;


    onSelect(hero: Hero): void {
        this.selectedHero = hero;
        this.router.navigate(['/hero', this.selectedHero.id]);
    }

}
