import { Component, ViewEncapsulation, ReflectiveInjector } from '@angular/core';
import { Hero } from '../interfaces/hero';

import { HeroService } from '../services/hero.service';

import { Task } from '../modules/taskModule/task';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    encapsulation: ViewEncapsulation.Emulated
    //providers: [HeroService] there is no need, in app.module it is already declared
})
export class AppComponent {

    showExamples: boolean = false;

    prop1;
    prop2;

    ngOnInit() {
        this.prop1 = 'prop1';
        this.prop2 = 'prop2';
    }

    title: string = 'Angular is here!';

    num: number = 23;
    updateNum(e) {
        this.num = parseInt(e);
        this.inputType = 'text';
        this.mess = 'now I am text input :)'
    }

    fontSizePx: number = 30;

    iterableString = new String('I am iterable string written char by char :)');
    //nonIterableString = 'I am not iterable string :(';
    tasks: Task[] = [
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

    inputType = 'checkbox';
    mess = '';

    // blabla = 'blabalasd';



    changeProps() {
        this.prop1 += ' bla';
        //this.prop2 += ' ko';
    }

}
