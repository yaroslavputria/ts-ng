import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AComponent } from './a.component';

@NgModule({
    declarations: [
        AComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        AComponent
    ],
    providers: [
        { provide: 'common-token', useValue: 'frome module one', multi: true }
    ]
})
export class ModuleOne { }
