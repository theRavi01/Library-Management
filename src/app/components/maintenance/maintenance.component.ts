import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from 'src/app/models/Book';
import { LoginResponse } from 'src/app/models/LoginResponse';
import { RegisterRequest } from 'src/app/models/RegisterRequest';
import { AuthService } from 'src/app/service/auth.service';
import { BookService } from 'src/app/service/book.service';
import { Location } from '@angular/common';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-maintenance',
  templateUrl: './maintenance.component.html',
  styleUrls: ['./maintenance.component.css']
})
export class MaintenanceComponent implements OnInit {

  books: Book[] = [];
  users: User[] = [];
  selectedBook: Book | null = null; 

  newBook: Book = {
    bookName: '',category:'', authorName: '', available: true
  };

  newUser: User = {
    username: '', password: '', role: ''
  };

  // Flags to show/hide sections
  showBookList: boolean = true;
  showUserList: boolean = false;

  allusers: LoginResponse[] = [];
category: any;
selectedUser: any;


  constructor(private authService: AuthService, private location: Location,
    private bookService: BookService, private router: Router) {}

  ngOnInit(): void {
    this.getBooks();
    this.fetchUsers();
  }

  showBooks() {
    this.showBookList = true;
    this.showUserList = false;
  }

  showUsers() {
    this.showUserList = true;
    this.showBookList = false;
    this.fetchUsers();
  }

  // Fetch users from backend
  fetchUsers() {
    this.authService.getAllUsers().subscribe({
      next: (allusers) => {
        this.allusers = allusers;
        console.log('Users fetched successfully', allusers);
      },
      error: (error) => {
        console.error('Error fetching users', error);
      }
    });
  }

  // Fetch all books from backend
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



  // Delete a book
  deleteBook(id: number): void {
    if (confirm('Are you sure you want to delete this book?')) {
      this.bookService.deleteBook(id).subscribe({
        next: () => {
          this.router.navigate(['/maintenance']);
          this.books = this.books.filter(book => book.id !== id); // Remove the deleted book from the list
        },
        error: (err) => {
          console.error('Error deleting book', err);
        }
      });
    }
  }

  // Select a book for update and open the modal
  selectBookForUpdate(book: Book): void {
    this.selectedBook = { ...book }; // Create a copy of the book to avoid updating the array directly
  }

  // Update the selected book
  updateBook(): void {
    if (this.selectedBook?.id) {
      this.bookService.updateBook(this.selectedBook.id, this.selectedBook).subscribe({
        next: (updatedBook: Book) => {
          const index = this.books.findIndex(b => b.id === updatedBook.id);
          if (index !== -1) {
            this.books[index] = updatedBook; // Update the book in the list
          }
          this.selectedBook = null; // Clear the selected book after update
          alert('Book updated successfully');
        },
        error: (error: any) => {
          console.error('Error updating book:', error);
        }
      });
    }
  }

    // Add a new book
    addBook(): void {
      this.bookService.createBook(this.newBook).subscribe({
        next: (book) => {
          this.books.push(book); // Add the new book to the list
          this.newBook = { bookName: '',category:'', authorName: '', available: true }; 
        },
        error: (err) => {
          console.error('Error adding book', err);
          alert('Failed to register new book: ' + err.error);
        }
      });
    }

    addNewUser() {
      this.authService.register(this.newUser).subscribe({
        next: (user) => {
          this.users.push(user);
          this.newUser = {username:'',password:'',role:'' }
        },
        error: (error) => {
          console.error('Error registering user:', error);
          alert('Failed to register new user: ' + error.error);
        }
      });
    }
    
}
