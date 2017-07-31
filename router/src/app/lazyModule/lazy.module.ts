import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LazyComponent } from './lazy.component';

const ROUTES = [
    {
        path: '',
        component: LazyComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(ROUTES)],
    entryComponents: [LazyComponent],
    declarations: [LazyComponent]
})
export class LazyModule {
    static components = [LazyComponent];
}
