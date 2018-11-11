import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginPageComponent } from './login-page/login-page.component';
import { RootPageComponent } from './root-page/root-page.component';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
    { path: '',            component: LoginPageComponent },
    { path: 'dashboard', component: RootPageComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
