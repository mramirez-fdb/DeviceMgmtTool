import { Injectable } from '@angular/core';
import { Router, Resolve, RouterStateSnapshot,
         ActivatedRouteSnapshot } from '@angular/router';

import {AuthService} from "./auth.service";
import {  User } from 'oidc-client';
@Injectable()
export class AuthUserResolverService implements Resolve<User>{


  constructor(private authService: AuthService, private router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<User>{
    console.log("AuthUserResolverService.resolve called")
    return this.authService.getUser().then(user => {
      console.log("AuthUserResolverService.resolve -> authService.getUser has returned");
      if(user){
        return user;
      }else{
        //re route?
        return null;
      }
    });
  }

}
