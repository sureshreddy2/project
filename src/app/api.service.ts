import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../environments/environment'; // Make sure to import the environment file

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = environment.apiUrl; // Use environment variable

  constructor(private http: HttpClient) { }

  // HTTP GET request to fetch items from backend
  getItems(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/items`)
      .pipe(
        catchError(this.handleError)
      );
  }

  // HTTP POST request to send data to backend
  postData(data: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<any>(`${this.apiUrl}/post`, data, { headers })
      .pipe(
        catchError(this.handleError)
      );
  }

  // HTTP PUT request to update data on backend
  updateItem(id: number, data: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.put<any>(`${this.apiUrl}/items/${id}`, data, { headers })
      .pipe(
        catchError(this.handleError)
      );
  }

  // HTTP DELETE request to delete item on backend
  deleteItem(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/items/${id}`)
      .pipe(
        catchError(this.handleError)
      );
  }

  // Example method to handle errors
  private handleError(error: HttpErrorResponse) {
    console.error('API Error:', error);
    // Customize error handling as needed
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }

  // Add more methods as needed for your application
}
