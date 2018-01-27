import {AboutComponent} from './components/about/about.component';
import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { CommunityComponent } from './components/community/community.component';
import {NearbyComponent} from './components/nearby/nearby.component';
import { PizzastatusComponent } from './components/pizzastatus/pizzastatus.component';
import {SearchComponent} from './components/search/search.component';
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
    },
    {
        path: 'search',
        component: SearchComponent
    }
];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
