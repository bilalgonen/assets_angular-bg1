import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, ParamMap } from '@angular/router'
import { DataassetsService } from '../dataassets.service'

@Component({
  selector: 'app-dataassetdetails',
  templateUrl: './dataassetdetails.component.html',
  styleUrls: ['./dataassetdetails.component.css'],
})
export class DataassetdetailsComponent implements OnInit {
  asset: any = {}
  constructor(
    private store: DataassetsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = params.get('id')

      if (id) {
        this.store
          .getAsset(parseInt(id, 10))
          .subscribe((asset) => (this.asset = asset))
      }
    })
  }
}
