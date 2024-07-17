
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { ArtsPhotographyDatum } from '../Models/ArtsPhotographyData';
import { ArtsPhtography } from '../Models/ArtsPhotography';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  selectedBook:ArtsPhtography=new ArtsPhtography();

 private SelectedBookDetails= new BehaviorSubject(this.selectedBook);
 SelectedBookData =this.SelectedBookDetails.asObservable();

  GetBookDataSelected(Book:ArtsPhtography){
   this.SelectedBookDetails.next(Book);
  }

  constructor(private http:HttpClient) { }

  GetBookList(): Observable<ArtsPhotographyDatum[]> {
      return this.http.get<ArtsPhotographyDatum[]>(`${this.apiUrl}/GetArchitetureBookType`);
  }

  GetBooksInfo():Observable<ArtsPhtography[]>{
    return this.http.get<ArtsPhtography[]>(`${this.apiUrl}/GetArtsArchitetureType`);
  }


}
