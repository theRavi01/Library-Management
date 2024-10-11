import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'library-management';

  constructor(private router: Router) {}

  ngOnInit(): void {
    // localStorage.setItem('role','user');
    // Check localStorage for role
    const role = localStorage.getItem('role');

    // Redirect based on role value
    if (!role) {
      this.router.navigate(['/login']);  // Redirect to login if no role
    } else if (role === 'user') {
      this.router.navigate(['/user-home']);  // Redirect to user home
    } else if (role === 'admin') {
      this.router.navigate(['/admin-home']); // Redirect to admin home
    }
  }
}
