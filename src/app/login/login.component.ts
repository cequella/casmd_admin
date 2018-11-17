import { Component, OnInit } from '@angular/core';

import { AuthGuardsService } from '../guards/auth-guards.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styles: []
})
export class LoginComponent implements OnInit {

    constructor(private guard: AuthGuardsService) { }

    ngOnInit() {
    }

    unlock() {
	this.guard.authenticate();
    }
}
