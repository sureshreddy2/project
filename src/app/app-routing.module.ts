import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBookComponent } from './add-book/add-book.component';
import { AllBooksComponent } from './all-books/all-books.component';
import { PlaceOrderComponent } from './BuyBook/place-order/place-order.component';
import { SelectedBookToBuyComponent } from './BuyBook/selected-book-to-buy/selected-book-to-buy.component';
import { WishlistComponent } from './BuyBook/wishlist/wishlist.component';
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [
  {
    path:"books",
    component:AllBooksComponent
  },
  {
    path:"NewBookAdded",
    component:AllBooksComponent
  },
  {
    path:"SelectedBook",
    component:SelectedBookToBuyComponent
  },
  {
    path:"WishlistBook",
    component:WishlistComponent
  },
  {
    path:"place-orderBook",
    component:PlaceOrderComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


 }
