import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ActivechildService } from './activechild.service';

@Injectable({
  providedIn: 'root'
})
export class LoadGuard implements CanLoad {
  constructor(private authService: ActivechildService, private router: Router) {}

  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    console.log('Checking if the user is logged in...');
    const isLoggedIn = this.authService.isLoggedIn();
    if (!isLoggedIn) {
      console.log('User is not logged in. Redirecting to login page...');
      this.router.navigate(['/login']);
    }
    return isLoggedIn;
  }
  }
