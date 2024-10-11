// src/app/auth/auth.service.ts

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginRequest } from '../models/LoginRequest'; // Create this model
import { LoginResponse } from '../models/LoginResponse'; // Create this model

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8080/api/auth'; // Update to your backend URL

  constructor(private http: HttpClient) {}

  login(loginRequest: LoginRequest): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.apiUrl}/login`, loginRequest, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }

  register(registerRequest: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, registerRequest, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }

  getAllUsers(): Observable<LoginResponse[]> {
    return this.http.get<LoginResponse[]>(`${this.apiUrl}/users`, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }

}
