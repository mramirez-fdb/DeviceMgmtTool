import { Component, OnInit } from '@angular/core';
import{UserService} from "./services/user.service";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [UserService]
})
export class AppComponent implements OnInit {
  title = 'app works very well still!';
  displayName: string;
  isExpired: boolean;
  constructor(private userService: UserService){
    userService.getUser().then(user => {
      this.displayName = user.displayName;
    });
    userService.isUserSessionExpired().then(expired =>{
      this.isExpired = expired;
    });

  }

  ngOnInit(){

  }

}
