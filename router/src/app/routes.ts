import { TasksComponent } from './tasks.component';
import { TaskDetailsComponent } from './task-details.component';

import { MessageResolver } from './message-resolver';

export const ROUTES = [
    {
        path: 'tasks',
        //pathMatch: 'full',
        component: TasksComponent,
        resolve: {
            message1: MessageResolver
        },
        children: [
            {
                path: ':id',
                component: TaskDetailsComponent,
                // outlet: 'primary' // there is no need - it's default
            }
        ]
    },
    {
        path: ':id',
        component: TaskDetailsComponent,
        outlet: 'details'
    },
    {
        path: ':id',
        component: TaskDetailsComponent,
        outlet: 'anotherdetails'
    },

    {
        path: 'lazy',
        loadChildren: 'app/lazyModule/lazy.module.js#LazyModule'
    }
];
