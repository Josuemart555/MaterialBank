import { Injectable } from '@angular/core';
import {
          Router,
          ActivatedRouteSnapshot,
          RouterStateSnapshot,
          CanActivate
       } from '@angular/router';

@Injectable()
export class AuthGuardLogiService implements CanActivate {

  constructor( private router: Router ) { }

  canActivate( next: ActivatedRouteSnapshot, state: RouterStateSnapshot ){

    console.log(next);

    if ( localStorage.getItem('usuario') == null ) {
      console.log("Paso el guard");
      return true;
    } else {
      console.error("No paso el guard");
      this.router.navigate(['/home'])
      return false;
    }

  }

}
