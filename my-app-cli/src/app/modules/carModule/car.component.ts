import { Component, Inject } from '@angular/core';

import { CarService } from './car.service';

import { Engine } from './engine.service';
import { Tires } from './tires.service';
import { Doors } from './doors.service';

@Component({
    selector: 'car-cmp',
    template: `
        <div></div>
    `
})
export class CarComponent {
    constructor(@Inject(CarService) carService) {
        const injector = carService.injector;
        const engine = injector.get(Engine);
        const tires = injector.get(Tires);
        const doors = injector.get(Doors);

        console.log(engine.name);
        console.log(tires.name);
        console.log(doors.name);
    }
}
