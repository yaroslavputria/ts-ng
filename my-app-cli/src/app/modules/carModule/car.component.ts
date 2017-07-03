import { Component, Inject } from '@angular/core';

import { CarService } from './car.service';

import { Engine } from './engine.service';
import { Tires } from './tires.service';
import { Doors } from './doors.service';

import { engineStringToken } from './car.service';
import { TIRES_TOKEN } from './car.service';

@Component({
    selector: 'car-cmp',
    template: `
        <div>It's came from CarModule to show "Dependency Injection"</div>
    `
})
export class CarComponent {
    //tsconfig.json: "emitDecoratorMetadata": true
    constructor(@Inject(CarService) carService) {//we pass token in @Inject() to get provider
    //constructor(carService: CarService) {//
        const injector = carService.injector;
        //injector.get - returns created instanse of class not class
        const engine = injector.get(engineStringToken);//we pass token in custom function
        const tires = injector.get(TIRES_TOKEN);
        const doors = injector.get(Doors);

        console.log(engine.name);
        console.log(tires.name);
        console.log(doors.name);
    }
}
