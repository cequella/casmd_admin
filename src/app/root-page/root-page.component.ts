import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-root-page',
    templateUrl: './root-page.component.html',
    styleUrls: ['./root-page.component.scss']
})
export class RootPageComponent implements OnInit {
    menu =[
	{ icon: "view_quilty", label: "Home", path: "/dashboard" }
    ];

    constructor() { }

    ngOnInit() {
    }

}
