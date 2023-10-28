import { Component, OnInit } from '@angular/core'
import { DataassetsService } from '../dataassets.service'

@Component({
  selector: 'app-dataassetlist',
  templateUrl: './dataassetlist.component.html',
  styleUrls: ['./dataassetlist.component.css'],
})
export class DataassetlistComponent implements OnInit {
  assets: any[] = []

  constructor(private store: DataassetsService) {}

  ngOnInit(): void {
    this.store.getAllAssets().subscribe((assets) => {
      this.assets = assets
    })
  }
}
