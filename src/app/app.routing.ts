import {AboutComponent} from './components/about/about.component';
import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { CommunityComponent } from './components/community/community.component';
import {} from './components/nearby/nearby.component';
import { PizzastatusComponent } from './components/pizzastatus/pizzastatus.component';

const appRoutes: Routes = [
    {
        path: '',
        component: AboutComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'community',
        component: CommunityComponent
    },
    {
        path: 'pizzastatus',
        component: PizzastatusComponent
    }
];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
