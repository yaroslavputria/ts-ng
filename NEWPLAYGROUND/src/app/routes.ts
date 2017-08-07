import { RouterModule } from '@angular/router';
import { MainComponent } from './main.component';
import { AnimationsComponent } from './animations-cmp/aniamtions.component';

export const ROUTES = RouterModule.forRoot([
    {path: '', component: MainComponent},
    {path: 'animations', component: AnimationsComponent}
]);
