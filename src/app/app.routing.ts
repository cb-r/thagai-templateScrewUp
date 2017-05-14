import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {LoginComponent} from './login/login.component';
import {JoinComponent} from './join/join.component';
import {LandingPageBodyComponent} from './landing-page-body/landing-page-body.component';

const appRoutes: Routes = [
    {
        path:"",
        component: LandingPageBodyComponent,
    },
    
    {
        path:"join",
        component: JoinComponent,
    },
    {
        path:"login",
        component: LoginComponent
    }
]

@NgModule({
    imports:[
        RouterModule.forRoot(
            appRoutes
        )
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule{}