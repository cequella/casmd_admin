import { NgModule } from '@angular/core';
import { Routes,
	 RouterModule
       } from '@angular/router';

import { AuthGuardsService } from '../guards/auth-guards.service';

import { LayoutComponent } from './layout/layout.component';
import { HomeComponent }   from './home/home.component';

const routes: Routes = [
    { path: 'dashboard', component: LayoutComponent, canActivate: [AuthGuardsService], children: [
	{ path: '', redirectTo: 'home', pathMatch: 'full' },
	{ path: 'home', component: HomeComponent}
    ]}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class DashboardRoutingModule { }
