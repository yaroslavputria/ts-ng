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
        { provide: 'common-token', useValue: 'from module two', multi: true }
    ]
})
export class ModuleTwo { }
