import { RouterModule } from '@angular/router';

import { HeroDetailCmp } from './components/hero-detail/hero-datail.component';
import { HeroesCmp } from './components/heroes/heroes.component';
import { GithubUsersInfoCmp } from './components/github-users-info/github-users-info.component';

export const Routes = RouterModule.forRoot([
    {
        path: 'heroes',
        component: HeroesCmp
    },
    {
        path: 'hero/:id',
        component: HeroDetailCmp
    },
    {
        path: 'github-users-info',
        component: GithubUsersInfoCmp
    }
])
