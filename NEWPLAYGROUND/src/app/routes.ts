import { RouterModule } from '@angular/router';
import { MainComponent } from './main.component';
import { AnimationsComponent } from './animations-cmp/aniamtions.component';
import { FormsComponent } from './forms-cmp/forms.component';

export const ROUTES = RouterModule.forRoot([
    {path: '', component: MainComponent},
    {path: 'animations', component: AnimationsComponent},
    {path: 'forms', component: FormsComponent}
]);
