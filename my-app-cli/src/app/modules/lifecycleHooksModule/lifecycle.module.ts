import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AComponent } from './a.component';
import { BComponent } from './b.component';
import { CComponent } from './c.component';
import { ADirective } from './a.component';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        AComponent,
        BComponent,
        CComponent,
        ADirective
    ],
    imports: [
        FormsModule,
        CommonModule
    ],
    exports: [
        AComponent
    ],
    providers: [
    ],
    bootstrap: [  ]
})
export class LifecycleModule { }
