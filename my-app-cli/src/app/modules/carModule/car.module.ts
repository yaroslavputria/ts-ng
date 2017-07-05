import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarComponent } from './car.component';

import { ENGINE_CONFIG } from './config';
import { TIRES_CONFIG } from './config';
import { config } from './config';

import { CarService } from './car.service';

import { BlaCmp } from './car.component';

@NgModule({
    declarations: [
        CarComponent,
        BlaCmp
    ],
    imports: [
        CommonModule
    ],
    exports: [
        CarComponent
    ],
    providers: [
        CarService,//token the same as service class - its equal { provide: CarSrvice, useClass: CarService }
        { provide: ENGINE_CONFIG, useValue: config },
        { provide: TIRES_CONFIG, useExisting: ENGINE_CONFIG },

        { provide: 'a', useValue: 'a provider from root'}
    ],
    bootstrap: [  ]
})
export class CarModule { }
