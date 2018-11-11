import { Component,
	 OnInit,
	 AfterViewInit,
	 ElementRef
       } from '@angular/core';
import { FormControl,
	 FormGroup,
	 Validators
       } from '@angular/forms';
import { Router,
	 ActivatedRoute,
	 ParamMap
       } from '@angular/router';

@Component({
    selector: 'app-login-page',
    templateUrl: './login-page.component.html',
    styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit, AfterViewInit {
    loginForm = new FormGroup({
	username: new FormControl(
	    { value: '', disabled: false },
	    [Validators.required]),
	password: new FormControl(
	    { value: '', disabled: false },
	    [Validators.required])
    });

    constructor(private elementRef: ElementRef, private router: Router) { }

    ngOnInit() {
    }
    ngAfterViewInit() {
	this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = '#363640';
    }

    submit() {
	//Login using loginform.value
	this.router.navigate(["/dashboard"]);
	this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = '#ffffff';
    }
}
