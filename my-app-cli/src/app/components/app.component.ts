import { Component, ViewEncapsulation } from '@angular/core';
import { Hero } from '../interfaces/hero';

import { HeroService } from '../services/hero.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    encapsulation: ViewEncapsulation.Emulated
    //providers: [HeroService] there is no need, in app.module it is already declared
})
export class AppComponent {

    showExamples: boolean = false;

    ngOnInit() {

    }

    title: string = 'Angular is here!';

    num: number = 23;
    updateNum(e) {
        this.num = parseInt(e);
    }
}
