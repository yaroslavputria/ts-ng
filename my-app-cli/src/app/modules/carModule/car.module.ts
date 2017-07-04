import { NgModule, InjectionToken } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarComponent } from './car.component';

import { CarService } from './car.service';

export const ENGINE_CONFIG = new InjectionToken('ENGINE_CONFIG');
export const TIRES_CONFIG = new InjectionToken('TIRES_CONFIG');

@NgModule({
    declarations: [
        CarComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        CarComponent
    ],
    providers: [
        CarService,//token the same as service class - its equal { provide: CarSrvice, useClass: CarService }
        { provide: ENGINE_CONFIG, useValue: true },
        { provide: TIRES_CONFIG, useExisting: ENGINE_CONFIG }
    ],
    bootstrap: [  ]
})
export class CarModule { }
