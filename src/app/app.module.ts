import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { NavComponent } from './components/shared/nav/nav.component';
import { FilterComponent } from './components/book-cart/filters/filters.component';
import { ProductListComponent } from './components/book-cart/product-list/product-list.component';
import { BookCartComponent } from './components/book-cart/book-cart.component';
import { ProductItemComponent } from './components/book-cart/product-list/product-item/product-item.component';
import { BooksService } from './components/book-cart/product-list/product-list.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    BookCartComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    FilterComponent,
    ProductListComponent,
    ProductItemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [BooksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
