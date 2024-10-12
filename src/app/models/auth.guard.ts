import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(): boolean {
    const role = localStorage.getItem('role');

    if (role === 'ADMIN') {
      // Allow access to the route
      return true;
    } else if (role === 'USER') {
      // Redirect the user to user home if they try to access admin routes
      this.router.navigate(['/user-home']);
      return false;
    } else {
      // Redirect to login if no role is found
      this.router.navigate(['/login']);
      return false;
    }
  }
}
