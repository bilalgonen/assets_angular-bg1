import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { FirstComponent } from './first/first.component'
import { SecondComponent } from './second/second.component'
import { NotFoundComponent } from './not-found/not-found.component'
import { ContactModule } from './contact/contact.module'
import { ProductsModule } from './products/products.module'
import { DataassetsModule } from './dataassets/dataassets.module'
import { WishModule } from './wish/wish.module'

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ContactModule,
    ProductsModule,
    DataassetsModule,
    WishModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
