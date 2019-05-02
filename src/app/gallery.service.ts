import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {
  public spiritualImages = [
    {
      "imgId" : "1",
      "url": "assets/img/buddha.jpg"
    
    },
    {
      "imgId":"2",
      "url":"assets/img/ganesh.jpg"
    },
    {
      "imgId":"3",
      "url":"assets/img/ganesha2.jpg"
    },
    {
      "imgId":"4",
      "url":"assets/img/saffron.jpg"
    },
    {
      "imgId":"5",
      "url":"assets/img/islam.jpg"
    },
    {
      "imgId":"6",
      "url":"assets/img/islam2.jpg"
    }
  ]

  public getImages() : any{
    return this.spiritualImages;
  }

  constructor() { }
}
