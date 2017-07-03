import { ReflectiveInjector, InjectionToken } from '@angular/core';
import { Engine } from './engine.service';
import { Tires } from './tires.service';
import { Doors } from './doors.service';

export const engineStringToken = 'Engine';
export const TIRES_TOKEN = new InjectionToken('Tires');

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
            //Engine,// the same: { provide: Engine, useClass: Engine },
            { provide: engineStringToken, useClass: Engine },
            //Tires,// the same: { provide: Tires, useClass: Tires },
            { provide: TIRES_TOKEN, useClass: Tires },
            Doors// the same: { provide: Doors, useClass: Doors }
        ]);
        return this._injector;
    }
}
