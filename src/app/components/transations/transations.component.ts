import { Component } from '@angular/core';

@Component({
  selector: 'app-transations',
  templateUrl: './transations.component.html',
  styleUrls: ['./transations.component.css']
})
export class TransationsComponent {
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
