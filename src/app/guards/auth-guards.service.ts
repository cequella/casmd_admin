import { Injectable }  from '@angular/core';
import { CanActivate,
	 ActivatedRouteSnapshot,
	 RouterStateSnapshot,
	 Router,
	 Route
       } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthGuardsService implements CanActivate {
    private isAuthenticated: boolean =false;

    constructor(private router: Router) { }

    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
	return this.isAuthenticated;
    }

    authenticate() {
	this.isAuthenticated =true;
    }
}
