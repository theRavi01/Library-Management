import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from 'src/app/models/Book';
import { LoginResponse } from 'src/app/models/LoginResponse';
import { RegisterRequest } from 'src/app/models/RegisterRequest';
import { AuthService } from 'src/app/service/auth.service';
import { BookService } from 'src/app/service/book.service';

@Component({
  selector: 'app-maintenance',
  templateUrl: './maintenance.component.html',
  styleUrls: ['./maintenance.component.css']
})
export class MaintenanceComponent implements OnInit {

  constructor(private authService: AuthService,
    private bookService: BookService, private router: Router) {}

    ngOnInit(): void {
      this.fetchUsers();
      this.getBooks();
    }

    books: Book[] = [];
    newBook: Book = {
      bookName: '', authorName: '', available: true};

  showBookList: boolean = true; // hide the books list
  showUserList: boolean = false;  //hide the users list

  users: LoginResponse[] = [];

  showBooks() {
    this.showBookList = true;      // Show books list
    this.showUserList = false;     // Hide users list
  }

  showUsers() {
    this.showUserList = true;      // Show users list
    this.showBookList = false;     // Hide books list
  }

  username: string = '';
  password: string = '';
  role: string = 'USER'; // Default role is 'USER'

  addNewUser() {
    const registerRequest: RegisterRequest = {
      username: this.username,
      password: this.password,
      role: this.role
    };

    this.authService.register(registerRequest).subscribe({
      next: (response) => {
        console.log('User added successfully:', response);
        alert('New user registered successfully!');
        this.router.navigate(['/home']); // Redirect to another page if needed
      },
      error: (error) => {
        console.error('Error registering user:', error);
        alert('Failed to register new user: ' + error.error);
      }
    });
  }

  fetchUsers() {
    this.authService.getAllUsers().subscribe({
      next: (response) => {
        this.users = response;
        console.log('Users fetched successfully', response);
      },
      error: (error) => {
        console.error('Error fetching users', error);
      }
    });
  }


  // Get all books from the API
  getBooks(): void {
    this.bookService.getAllBooks().subscribe({
      next: (books) => {
        this.books = books;
      },
      error: (err) => {
        console.error('Error fetching books', err);
      }
    });
  }

  // Add a new book
  addBook(): void {
    this.bookService.createBook(this.newBook).subscribe({
      next: (book) => {
        this.books.push(book); // Add the new book to the list
        this.newBook = { bookName: '', authorName: '', available: true }; // Reset the form
      },
      error: (err) => {
        console.error('Error adding book', err);
      }
    });
  }

  // Delete a book
  deleteBook(id: number): void {
    this.bookService.deleteBook(id).subscribe({
      next: () => {
        this.books = this.books.filter(book => book.id !== id); // Remove the deleted book from the list
      },
      error: (err) => {
        console.error('Error deleting book', err);
      }
    });
  }
}
