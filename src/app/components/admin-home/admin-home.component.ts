import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent {


  constructor(private router:Router){}

  products: Product[] = [];

  ngOnInit(): void {
    // Simulate a service call to fetch the products
    this.products = [
      { codeNoFrom: 'SC(B/M)000001', codeNoTo: 'SC(B/M)000004', category: 'Science' },
      { codeNoFrom: 'SC(B/M)000005', codeNoTo: 'SC(B/M)000008', category: 'Personal Development' },
      { codeNoFrom: 'SC(B/M)000009', codeNoTo: 'SC(B/M)000012', category: 'Technology' },
    ];
  }

  // Clear localStorage on logout
  logout(): void {
    localStorage.clear();
    this.router.navigate(['/login']);
  }


}
