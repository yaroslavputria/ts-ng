import { ReflectiveInjector, InjectionToken } from '@angular/core';
import { Engine } from './engine.service';
import { Tires } from './tires.service';
import { Doors } from './doors.service';

import { CarModule } from './car.module';

export const engineStringToken = 'Engine';
export const TIRES_TOKEN = new InjectionToken('Tires');

const config = true;

export const ENGINE_CONFIG = new InjectionToken('ENGINE_CONFIG');
export const TIRES_CONFIG = new InjectionToken('TIRES_CONFIG');

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
            //{ provide: engineStringToken, useClass: Engine },
            { provide: ENGINE_CONFIG, useValue: CarModule },
            { provide: TIRES_CONFIG, useExisting: ENGINE_CONFIG },
            { provide: engineStringToken, useFactory: (ENGINE_CONFIG) => {
                return (ENGINE_CONFIG !== null) ? new Engine : {name: 'no engine'};
            }, deps: [ENGINE_CONFIG] },
            //Tires,// the same: { provide: Tires, useClass: Tires },
            { provide: TIRES_TOKEN, useFactory: (TIRES_CONFIG) => {
                return (TIRES_CONFIG !== null) ? new Tires : {name: 'no tires'};
            }, deps: [TIRES_CONFIG] },
            Doors,// the same: { provide: Doors, useClass: Doors }
            { provide: 'tmpToken', useValue: {bla: 'there can be anything'} },
            { provide: config, useValue: true },
            { provide: 'useExistingDoors', useExisting: Doors },
            {
                provide: 'byFactory',
                useFactory: (config) => {
                    return (config) ? new String('something for true config') : new String('something for false config');//cache and return the same object
                },
                deps: [config]
            }
        ]);
        return this._injector;
    }
}
