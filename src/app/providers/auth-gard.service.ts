import { Injectable } from '@angular/core';
import {
          Router,
          ActivatedRouteSnapshot,
          RouterStateSnapshot,
          CanActivate
       } from '@angular/router';

@Injectable()
export class AuthGardService implements CanActivate {

  constructor( private router: Router ) { }

  canActivate( next: ActivatedRouteSnapshot, state: RouterStateSnapshot ){

    console.log(next);

    if (  JSON.parse(localStorage.getItem('role')) == 'ROLE_ADMIN' ) {
      console.log("Paso el guard");
      return true;
    } else {
      console.error("No paso el guard");
      this.router.navigate(['/home'])
      return false;
    } 

  }

}
