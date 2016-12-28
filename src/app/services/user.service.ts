import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

  constructor() { }

  getUser(){
    return {
      givenName: "Test Name",
      familyName: "Tester",
      id: 5
    }
  }
}
