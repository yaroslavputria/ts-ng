import { Component, Input } from '@angular/core';
import { Hero } from '../../interfaces/hero';

@Component({
    selector: 'hero-detail',
    templateUrl: './hero-datail.component.html'
})
export class HeroDetailCmp {
    @Input()hero: Hero;
}
