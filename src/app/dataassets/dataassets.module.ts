import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { DataassetlistComponent } from './dataassetlist/dataassetlist.component'
import { DataassetdetailsComponent } from './dataassetdetails/dataassetdetails.component'
import { RouterModule } from '@angular/router'

@NgModule({
  declarations: [DataassetlistComponent, DataassetdetailsComponent],
  imports: [CommonModule, RouterModule],
})
export class DataassetsModule {}
