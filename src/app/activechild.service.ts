import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ActivechildService {

  constructor() {
    
  }
  private loggedIn = false;

  login() {
    // Perform login logic here, such as making a HTTP request to a backend API
    // Once login is successful, set loggedIn to true
    this.loggedIn = true;
  }

  logout() {
    // Perform logout logic here, such as making a HTTP request to a backend API
    // Once logout is successful, set loggedIn to false
    this.loggedIn = false;
  }

  isLoggedIn() {
    return this.loggedIn;
  }


  
  
}
