import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username: string = '';
  password: string = '';

  // Predefined users
  users = [
    { username: 'admin', password: 'admin', role: 'admin' },
    { username: 'user', password: 'user', role: 'user' }
  ];

  constructor(private router: Router) {}

  // Method to handle login
  login() {
    // Find the user by username and password
    const user = this.users.find(u => u.username === this.username && u.password === this.password);

    if (user) {
      // If user is found, store username and role in localStorage
      localStorage.setItem('username', user.username);
      localStorage.setItem('role', user.role);

      // Redirect based on role
      if (user.role === 'admin') {
        this.router.navigate(['/admin-home']);
      } else if (user.role === 'user') {
        this.router.navigate(['/user-home']);
      }
    } else {
      // If login fails, show an alert
      alert('Invalid username or password');
    }
  }
}
