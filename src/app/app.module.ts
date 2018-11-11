import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from './material-module/material-module.module';
import { LoginPageComponent } from './login-page/login-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { RootPageComponent } from './root-page/root-page.component';

@NgModule({
    declarations: [
	AppComponent,
	LoginPageComponent,
	HomePageComponent,
	RootPageComponent
    ],
    imports: [
	BrowserModule,
	AppRoutingModule,
	MaterialModule,
	ReactiveFormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
