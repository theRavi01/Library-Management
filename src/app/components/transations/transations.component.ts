import { Component } from '@angular/core';

@Component({
  selector: 'app-transations',
  templateUrl: './transations.component.html',
  styleUrls: ['./transations.component.css']
})
export class TransationsComponent {
  showBookList: boolean = false; // Initially hide the books list
  showUserList: boolean = false;  // Initially hide the users list
  showIssueBooks: boolean = false;
  showBooks() {
    this.showBookList = true;      // Show books list
    this.showUserList = false;     // Hide users list
    this.showIssueBooks = false;   // Hide issue book
  }

  showUsers() {
    this.showUserList = true;      // Show users list
    this.showBookList = false;     // Hide books list
    this.showIssueBooks = false;   // Hide issue book
  }

  showIssueBook() {
    this.showIssueBooks = true;     // Show issue book form
    this.showBookList = false;      // Hide books list
    this.showUserList = false;      // Hide users list
  }
}
