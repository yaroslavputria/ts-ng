import { ReflectiveInjector } from '@angular/core';
import { Engine } from './engine.service';
import { Tires } from './tires.service';
import { Doors } from './doors.service';

export class CarService {
    engine;
    tires;
    doors;
    _injector = null;
    get injector() {
        if (this._injector === null) {
            return this.initInjector();
        } else {
            return this._injector;
        }

    }
    initInjector() {
        this._injector = ReflectiveInjector.resolveAndCreate([
            Engine,// { provide: Engine, useClass: Engine },
            Tires,// { provide: Tires, useClass: Tires },
            Doors// { provide: Doors, useClass: Doors }
        ]);
        return this._injector;
    }
}
