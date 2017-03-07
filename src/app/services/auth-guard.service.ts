import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuardService implements CanActivate {
  private hasCurrentUserData: boolean;
  constructor(private authService: AuthService, private router: Router) {
    //this.authService.
  }
/**
 * 
 * @param route 
 * @param state 
 */
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean { //
    //if(this.authService.loggedIn) {return true;}
    //this.router.navigate(["unauthorized"]);
    return this.authService.getUser().then(user => {
      if(user == null || user.expired)
      {
        this.router.navigate(["unauthorized"]);
        return false;
      }else{
        return true;
      }
    });
    /*return new Promise((resolve, reject) => {
      if (this.authService.loggedIn) { return resolve(true); }
      else {
        if (!this.hasCurrentUserData) {
          this.authService.userLoadedEvent.subscribe(user => {
            if (user) {
              this.hasCurrentUserData = true;
              return resolve(true);
            } else {
              this.router.navigate(["unauthorized"]);
              return reject(false);
            }
          },
            error => {
              return reject(false);
            },
            complete => {

            });
        } else {
          return reject(false);
        }
      }
    });*/
  }
}





