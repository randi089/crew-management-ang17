import { Routes } from '@angular/router';
import { TwoWayComponent } from './two-way/two-way.component';
import { SignalComponent } from './signal/signal.component';
import { StructuralComponent } from './structural/structural.component';
import { AppSignalComponent } from './app-signal/app-signal.component';
import { AttributeDirectivesComponent } from './attribute-directives/attribute-directives.component';

export const routes: Routes = [    
    {
        path: 'admin',
        loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
    },

    {
        path: 'add-user',
        loadComponent: () => import('./admin/add-user/add-user.component').then(c => c.AddUserComponent)
    },

    {
        path: 'two-way',
        component: TwoWayComponent
    },

    {
        path: 'signal',
        component: SignalComponent
    },

    {
        path: 'structural',
        component: StructuralComponent
    },

    {
        path: 'app-signal',
        component: AppSignalComponent
    },

    {
        path: 'attribute',
        component: AttributeDirectivesComponent
    },
];
