import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AuthGuardsService } from './guards/auth-guards.service';
import { DashboardModule } from './dashboard/dashboard.module';

import { MaterialModule } from './material-module/material-module.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';

@NgModule({
    declarations: [
	AppComponent,
	PageNotFoundComponent,
	LoginComponent
    ],
    imports: [
	BrowserModule,
	DashboardModule,
	AppRoutingModule,
	MaterialModule,
	ReactiveFormsModule
    ],
    providers: [AuthGuardsService],
    bootstrap: [AppComponent]
})
export class AppModule { }
