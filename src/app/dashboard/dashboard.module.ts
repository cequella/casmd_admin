import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';

import { DashboardRoutingModule } from './dashboard-routing.module';

@NgModule({
    declarations: [LayoutComponent, HomeComponent],
    imports: [
	CommonModule,
	DashboardRoutingModule
    ]
})
export class DashboardModule { }
