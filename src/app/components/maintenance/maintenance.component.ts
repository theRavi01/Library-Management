import { Component } from '@angular/core';

@Component({
  selector: 'app-maintenance',
  templateUrl: './maintenance.component.html',
  styleUrls: ['./maintenance.component.css']
})
export class MaintenanceComponent {

  showBookList: boolean = false; // hide the books list
  showUserList: boolean = false;  //hide the users list

  showBooks() {
    this.showBookList = true;      // Show books list
    this.showUserList = false;     // Hide users list
  }

  showUsers() {
    this.showUserList = true;      // Show users list
    this.showBookList = false;     // Hide books list
  }

}
