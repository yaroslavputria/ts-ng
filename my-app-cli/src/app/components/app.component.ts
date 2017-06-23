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

    tasks = [
        {
            taskName: 'Initial task',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias enim quis dolore reiciendis facilis voluptatem consequuntur excepturi necessitatibus laudantium obcaecati reprehenderit quibusdam hic, aut illo possimus, modi sapiente sequi minima?'
        },
        {
            taskName: 'Hard task',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi eveniet veritatis nobis! Doloribus eveniet cum blanditiis hic amet debitis dolorem sequi molestiae laboriosam sint quasi qui vel, quis assumenda saepe.'
        },
        {
            taskName: 'Super task',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur nobis ipsa dolorem ipsum. Consequuntur aspernatur fugit blanditiis ab cupiditate quas culpa facilis nostrum. Cumque fuga illum id repudiandae, obcaecati, dignissimos!'
        },
        {
            taskName: 'Easy task',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere vel laudantium aliquam eos nostrum soluta quaerat incidunt mollitia, iusto, assumenda optio in unde hic esse rerum, nam quod nesciunt at.'
        }
    ];
}
