import { Injectable } from '@angular/core'
import { of } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class DataassetsService {
  private data: any[] = [
    {
      id: 1,
      name: 'Asset One',
      desc: 'Lorem ipsum dolor sit amet consectetur',
    },
    {
      id: 2,
      name: 'Asset Two',
      desc: 'sit amet consectetur Lorem ipsum dolor.',
    },
    {
      id: 3,
      name: 'Asset Three',
      desc: 'amet consectetur Lorem ipsum dolor sit ',
    },
  ]

  constructor() {}

  getAllAssets() {
    return of(this.data)
  }

  getAsset(id: number) {
    return of(this.data.find((p) => p.id === id))
  }
}
