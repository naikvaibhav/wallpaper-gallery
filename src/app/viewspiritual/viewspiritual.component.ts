import { Component, OnInit } from '@angular/core';
//importing route related code
import { ActivatedRoute, Router } from '@angular/router';

import { GalleryService } from '../gallery.service';

import { Location } from '@angular/common';
@Component({
  selector: 'app-viewspiritual',
  templateUrl: './viewspiritual.component.html',
  styleUrls: ['./viewspiritual.component.css'],
  providers: [Location]
})
export class ViewspiritualComponent implements OnInit {
  public currentImage;
  public spiritualImages;

  constructor(private _route: ActivatedRoute, private router: Router, public galleryService: GalleryService, private location: Location) {
    console.log("View spiritual component constructor is called")
  }

  ngOnInit() {
    let myImageId = this._route.snapshot.paramMap.get('imgId');
    console.log(myImageId);


    this.currentImage = this.galleryService.getImage(myImageId);
    console.log(this.currentImage);

    this.spiritualImages = this.galleryService.getImages();


  }
  public goBackToPreviousPage(): any {
    this.location.back();
  }



}
