import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginRequest } from 'src/app/models/LoginRequest';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private authService:AuthService, private router: Router) {}

  username: string = '';
  password: string = '';
 
  login() {
    const loginRequest: LoginRequest = {
      username: this.username,
      password: this.password
    };

    // Only call authService.login when the user submits the form
    this.authService.login(loginRequest).subscribe({
      next: (response: { username: string; role: string; }) => {
        // Handle successful login
        console.log('Login successful:', response);
        // Store user info in localStorage or a service if needed
        localStorage.setItem('user',response.username);
        localStorage.setItem('role',response.role);
        if (!response.role) {
          this.router.navigate(['/login']);  // Redirect to login if no role
        } else if (response.role === 'USER') {
          this.router.navigate(['/user-home']);  // Redirect to user home
        } else if (response.role === 'ADMIN') {
          this.router.navigate(['/admin-home']); // Redirect to admin home
        }
      },
      error: (error) => {
        // Handle login failure
        console.error('Login failed:', error);
        alert('Invalid username or password');
      }
    });
  }
}
