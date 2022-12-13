import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TiendaService {
  private url = 'http://localhost:3000/api/v1/tienda';

  constructor(private http: HttpClient) {}

  getBooks(): Observable<any> {
    return this.http.get<any>(this.url);
  }

  getBook(id: String): Observable<any> {
    return this.http.get<any>(`${this.url}/${id}`);
  }

  postBook(data: any): Observable<any> {
    return this.http.post<any>(this.url, data);
  }

  putBook(id: String, data: any): Observable<any> {
    return this.http.put(`${this.url}/${id}`, data);
  }

  deleteBook(id: String): Observable<any> {
    return this.http.delete<any>(`${this.url}/${id}`);
  }
}
