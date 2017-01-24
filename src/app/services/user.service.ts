import { Injectable } from '@angular/core';
import { AuthService } from "./auth.service";
@Injectable()
export class UserService {

  constructor(private authService: AuthService) {


  }

  getUser() {
    return this.authService.getUser().then((user) => {
      if (user != null && user.profile != null) {
        return {
          givenName: user.profile.given_name,
          familyName: user.profile.family_name,
          email: user.profile.email,
          displayName: user.profile.fdb_displayname
        };
      }else{
          return null;
        }

    });
  }

  isUserSessionExpired(): Promise<boolean>{
    return this.authService.getUser().then((user) => {
      return user.expired;
    });
  }
}
