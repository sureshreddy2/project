import { Component, OnInit } from '@angular/core';
import { ArtsPhtography } from '../Models/ArtsPhotography';
import { ArtsPhotographyDatum } from '../Models/ArtsPhotographyData';
import { BookShopService } from '../Shared/book-shop.service';
import {MatDialog} from '@angular/material/dialog';
import { SelectedBookToBuyComponent } from '../BuyBook/selected-book-to-buy/selected-book-to-buy.component';

@Component({
  selector: 'app-all-books',
  templateUrl: './all-books.component.html',
  styleUrls: ['./all-books.component.css']
})
export class AllBooksComponent implements OnInit {

  GetAllBooks: ArtsPhotographyDatum[]=[];
  GetBookType: ArtsPhotographyDatum[]=[];
  BookType: string;

  constructor(private bookService: BookShopService,public dialog: MatDialog) {

  }
  ngOnInit() {
    this.GetBookDetails();
    this.FilterBookTypes(this.BookType);
  }

  GetBookDetails() {
    this.bookService.GetBookList().subscribe(data => {
      if (data != null) {
        this.GetBookType = data;
    this.GetAllBooks=data;
      }
    })
  }

  FilterBookTypes(bookType: string) {
    this.GetAllBooks = this.GetBookType.filter(x => x.subTypeOfBook == bookType);
    console.log(this.GetAllBooks);

  }

  openDialog(): void {
    const dialogRef = this.dialog.open(SelectedBookToBuyComponent, {
      data: {},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      
    });
  }

}
