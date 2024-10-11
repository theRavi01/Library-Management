import { Component } from '@angular/core';

@Component({
  selector: 'app-transations',
  templateUrl: './transations.component.html',
  styleUrls: ['./transations.component.css']
})
export class TransationsComponent {
  showBookList: boolean = false; // Initially hide the books list
  showUserList: boolean = false;  // Initially hide the users list
  showIssueBooks: boolean = false; // Initially hide the Issue book form
  showPayFineForm : boolean = false; // Initially hide the Pay fine form
  showBooks() {
    this.showBookList = true;      // Show books list
    this.showUserList = false;     // Hide users list
    this.showIssueBooks = false;   // Hide issue book
    this.showPayFineForm = false;      // Hide pay fine 
  }

  showUsers() {
    this.showUserList = true;      // Show users list
    this.showBookList = false;     // Hide books list
    this.showIssueBooks = false;   // Hide issue book
    this.showPayFineForm = false;      // Hide pay fine 
  }

  showIssueBook() {
    this.showIssueBooks = true;     // Show issue book form
    this.showBookList = false;      // Hide books list
    this.showUserList = false;      // Hide users list
    this.showPayFineForm = false;      // Hide pay fine 
  }

  showPayFine() {
    this.showIssueBooks = false;     // Hide issue book form
    this.showBookList = false;      // Hide books list
    this.showUserList = false;      // Hide users list
    this.showPayFineForm = true;       //  show pay fine 
  }
}
