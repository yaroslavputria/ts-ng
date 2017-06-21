import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { Hero } from '../../interfaces/hero';
import { HeroService } from '../../services/hero.service';

@Component({
    selector: 'heroes',
    templateUrl: './heroes.component.html',
    styles: [`.hero{cursor: pointer;}`]
})
export class HeroesCmp implements OnInit {
    heroes: Hero[];
    constructor(private heroService: HeroService, private router: Router) {
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
    onSelect(hero: Hero): void {
        this.router.navigate(['/hero', hero.id]);
    }

}
