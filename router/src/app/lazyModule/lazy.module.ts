import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LazyComponent } from './lazy.component';
import { LazyFormComponent } from './lazyform.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const ROUTES = [
    {
        path: '',
        component: LazyComponent
    }
];

@NgModule({
    imports: [FormsModule, ReactiveFormsModule, RouterModule.forChild(ROUTES)],
    entryComponents: [LazyComponent, LazyFormComponent],
    declarations: [LazyComponent, LazyFormComponent]
})
export class LazyModule {
    static components = [LazyComponent, LazyFormComponent];
}
