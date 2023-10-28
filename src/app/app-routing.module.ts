import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { FirstComponent } from './first/first.component'
import { SecondComponent } from './second/second.component'
import { NotFoundComponent } from './not-found/not-found.component'
import { ContactComponent } from './contact/contact.component'
import { ProductslistComponent } from './products/productslist/productslist.component'
import { ProductdetailsComponent } from './products/productdetails/productdetails.component'
import { DataassetlistComponent } from './dataassets/dataassetlist/dataassetlist.component'
import { DataassetdetailsComponent } from './dataassets/dataassetdetails/dataassetdetails.component'
import { WishComponent } from './wish/wish.component'

const routes: Routes = [
  { path: '', component: DataassetlistComponent },
  { path: 'assets', component: DataassetlistComponent },
  { path: 'assets/:id', component: DataassetdetailsComponent },
  { path: 'products', component: ProductslistComponent },
  { path: 'products/:id', component: ProductdetailsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'wishlist', component: WishComponent },
  { path: '**', component: NotFoundComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
