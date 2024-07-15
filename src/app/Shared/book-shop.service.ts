import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Endpoints } from '../Models/Endpoints';
import { ArtsPhotographyDatum } from '../Models/ArtsPhotographyData';

@Injectable({
  providedIn: 'root'
})
export class BookShopService {


  constructor(private http:HttpClient) { }

  endpoints:Endpoints=new Endpoints();

   encodeURI=this.endpoints.BookListURl

  GetBookList(): Observable<ArtsPhotographyDatum[]> {
      return this.http.get<ArtsPhotographyDatum[]>(this.encodeURI+this.endpoints.GetBooks);
  }

  GetBookTypeList():Observable<ArtsPhotographyDatum[]>{
    return this.http.get<ArtsPhotographyDatum[]>(this.encodeURI+this.endpoints.GetBookType);
  }
}
