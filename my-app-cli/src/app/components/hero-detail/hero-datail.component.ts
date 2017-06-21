import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../../interfaces/hero';
import { HeroService } from '../../services/hero.service';

import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import 'rxjs/add/operator/switchMap';

@Component({
    selector: 'hero-detail',
    templateUrl: './hero-datail.component.html',
    interpolation: ['$', '#']
})
export class HeroDetailCmp implements OnInit {
    @Input()hero: Hero;
    constructor(private heroService: HeroService, private route: ActivatedRoute, private location: Location) {

    }

    ngOnInit(): void {
        this.route.params
            .switchMap((params: Params) => this.heroService.getHero(+params['id']))
            .subscribe(hero => this.hero = hero);
    }

    goBack(): void {
        this.location.back();
    }
}
