import { ReflectiveInjector, InjectionToken, Injectable, Injector, Inject } from '@angular/core';
import { Engine } from './engine.service';
import { Tires } from './tires.service';
import { Doors } from './doors.service';

import { CarModule } from './car.module';

export const engineStringToken = 'Engine';
export const TIRES_TOKEN = new InjectionToken('Tires');

const config = 'config';

import { ENGINE_CONFIG } from './config';
import { TIRES_CONFIG } from './config';

@Injectable()
export class CarService {
    engine;
    tires;
    doors;
    _injector = null;
    //root;
    constructor(public root: Injector) {/*or constructor(@Inject(Injector) root) {
        this.root = root;*/
    }
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
            { provide: engineStringToken, useFactory: (ENGINE_CONFIG) => {
                return (ENGINE_CONFIG) ? new Engine : {name: 'no engine'};
            }, deps: [ENGINE_CONFIG] },//ENGINE_CONFIG and TIRES_CONFIG were inherited from root module (see car.module.ts)
            //Tires,// the same: { provide: Tires, useClass: Tires },
            { provide: TIRES_TOKEN, useFactory: (TIRES_CONFIG) => {
                return (TIRES_CONFIG) ? new Tires : {name: 'no tires'};
            }, deps: [TIRES_CONFIG] },
            Doors,// the same: { provide: Doors, useClass: Doors }

            //======================

            { provide: 'tmpToken', useValue: {bla: 'there can be anything'} },
            { provide: config, useValue: true },
            { provide: 'useExistingDoors', useExisting: Doors },
            {
                provide: 'byFactory',
                useFactory: (config) => {
                    return (config) ? new String('something for true config') : new String('something for false config');//returns the same object (caches it)
                },
                deps: [config]//dependency (previosly registred provider)
            },
            { provide: 'multiProvider', useValue: 1, multi: true },//we are able to get ARRAY of all provider insatnces with the same token and flag "multi: true"
            { provide: 'multiProvider', useValue: 2, multi: true }
        ], this.root);// this.root - parent injector
        return this._injector;
    }
}
