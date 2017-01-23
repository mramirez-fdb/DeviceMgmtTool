import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-auth-dashboard-tester',
  templateUrl: './auth-dashboard-tester.component.html',
  styleUrls: ['./auth-dashboard-tester.component.scss']
})
export class AuthDashboardTesterComponent implements OnInit {
  _user: any;
  loadedUserSub: any;
  constructor(private authService: AuthService) {

  }

  ngOnInit() {
    this.loadedUserSub = this.authService.userLoadedEvent
      .subscribe(user => {
        this._user = user;
      });
  }
  clearState() {
    this.authService.clearState();
  }
  getUser() {
    this.authService.getUser();
  }
  removeUser() {
    this.authService.removeUser();
  }
  startSigninMainWindow() {
    this.authService.startSigninMainWindow();
  }
  endSigninMainWindow() {
    this.authService.endSigninMainWindow();
  }
  startSignoutMainWindow() {
    this.authService.startSignoutMainWindow();
  }
  endSignoutMainWindow() {
    this.authService.endSigninMainWindow();
  }

  ngOnDestroy() {
    if (this.loadedUserSub.unsubscribe()) {
      this.loadedUserSub.unsubscribe();
    }
  }
}
