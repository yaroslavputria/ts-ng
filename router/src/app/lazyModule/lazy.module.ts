import { Component, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'lazy-cmp',
    template: `<span class="lazy">Lazy-lazy component</span>`,
    styles: [`.lazy {font-size: 40px; color: red;}`]
})
export class LazyComponent {

}

const ROUTES = [
    {
        path: '',
        component: LazyComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(ROUTES)],
    declarations: [LazyComponent]
})
export class LazyModule {

}
