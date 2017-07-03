import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarComponent } from './car.component';

import { CarService } from './car.service';

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
        CarService//token the same as service class - its equal { provide: CarSrvice, useClass: CarService }
    ],
    bootstrap: [  ]
})
export class CarModule { }
