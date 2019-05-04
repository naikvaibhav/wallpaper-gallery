import { Injectable } from '@angular/core';
import { SpiritualComponent } from './spiritual/spiritual.component';


@Injectable({
  providedIn: 'root'
})
export class GalleryService {
  public currentImageId;

  public spiritualImages = [
    {
      "imgId": "1",
      "url": "assets/img/om-wallpaper.jpg"

    },
    {
      "imgId": "2",
      "url": "assets/img/buddha.jpg"

    },
    {
      "imgId": "3",
      "url": "assets/img/ganesh.jpg"
    },
    {
      "imgId": "4",
      "url": "assets/img/ganesha2.jpg"
    },
    {
      "imgId": "5",
      "url": "assets/img/saffron.jpg"
    },
    {
      "imgId": "6",
      "url": "assets/img/islam.jpg"
    },
    {
      "imgId": "7",
      "url": "assets/img/islam2.jpg"
    },
    {
      "imgId": "8",
      "url": "assets/img/christ-wallpaper.jpg"
    },
    {
      "imgId": "9",
      "url": "assets/img/bhagavad-gita-wallpapers.jpg"
    }
  ]

  public abstractImages = [
    {
      "imgId": "1",
      "url": "assets/img/abstract1.jpg"
    },
    {
      "imgId": "2",
      "url": "assets/img/abstract2.jpg"
    },
    {
      "imgId": "3",
      "url": "assets/img/abstract3.jpg"
    },
    {
      "imgId": "4",
      "url": "assets/img/abstract4.jpg"
    },
    {
      "imgId": "5",
      "url": "assets/img/abstract5.jpg"
    },
    {
      "imgId": "6",
      "url": "assets/img/abstract6.jpg"
    },
    {
      "imgId": "7",
      "url": "assets/img/abstract7.jpg"
    },
    {
      "imgId": "8",
      "url": "assets/img/abstract8.jpg"
    },
    {
      "imgId": "9",
      "url": "assets/img/abstract9.jpg"
    }

  ]

  public natureImages = [
    {
      "imgId": "1",
      "url": "assets/img/nature1.jpg"
    },
    {
      "imgId": "2",
      "url": "assets/img/nature2.jpg"
    },
    {
      "imgId": "3",
      "url": "assets/img/nature3.jpg"
    },
    {
      "imgId": "4",
      "url": "assets/img/nature4.jpg"
    },
    {
      "imgId": "5",
      "url": "assets/img/nature5.jpg"
    },
    {
      "imgId": "6",
      "url": "assets/img/nature6.jpg"
    },
    {
      "imgId": "7",
      "url": "assets/img/nature7.jpg"
    },
    {
      "imgId": "8",
      "url": "assets/img/nature8.jpg"
    },
    {
      "imgId": "9",
      "url": "assets/img/nature9.jpg"
    }

  ]

  public getImages(): any {
    return this.spiritualImages;
  }

  public getabstractImages(): any {
    return this.abstractImages;
  }

  public getnatureImages(): any {
    return this.natureImages;
  }



  public getImage(currentImageId): any {
    for (let images of this.spiritualImages) {
      if (images.imgId == currentImageId) {
        this.currentImageId = images;
      }
    }
    return this.currentImageId;
  }

  public getAbstractImage(currentImageId): any {
    for (let images of this.abstractImages) {
      if (images.imgId == currentImageId) {
        this.currentImageId = images;
      }
    }
    return this.currentImageId;
  }


  public getNatureImage(currentImageId): any {
    for (let images of this.natureImages) {
      if (images.imgId == currentImageId) {
        this.currentImageId = images;
      }
    }
    return this.currentImageId;
  }
  constructor() { }
}
