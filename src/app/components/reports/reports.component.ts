import { Component } from '@angular/core';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent {
  showBookList: boolean = false; // Initially hide the books list
  showUserList: boolean = false;  // Initially hide the users list

  showBooks() {
    this.showBookList = true;      // Show books list
    this.showUserList = false;     // Hide users list
  }

  showUsers() {
    this.showUserList = true;      // Show users list
    this.showBookList = false;     // Hide books list
  }
}
