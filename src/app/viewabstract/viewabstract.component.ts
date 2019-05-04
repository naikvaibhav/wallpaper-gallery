import { Component, OnInit } from '@angular/core';

//importing route related code
import { ActivatedRoute, Router } from '@angular/router';

import { GalleryService } from '../gallery.service';

import { Location } from '@angular/common';

@Component({
  selector: 'app-viewabstract',
  templateUrl: './viewabstract.component.html',
  styleUrls: ['./viewabstract.component.css']
})
export class ViewabstractComponent implements OnInit {
  public currentImage;
  public abstractImages;

  constructor(private _route: ActivatedRoute, private router: Router, public galleryService: GalleryService, private location: Location) {
    console.log("View abstract component constructor is called")
  }

  ngOnInit() {
    let myImageId = this._route.snapshot.paramMap.get('imgId');
    console.log(myImageId);


    this.currentImage = this.galleryService.getAbstractImage(myImageId);
    console.log(this.currentImage);

    this.abstractImages = this.galleryService.getabstractImages();

  }
  public goBackToPreviousPage(): any {
    this.location.back();
  }

}



