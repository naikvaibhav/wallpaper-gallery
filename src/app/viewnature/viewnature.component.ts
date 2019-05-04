import { Component, OnInit } from '@angular/core';

//importing route related code
import { ActivatedRoute, Router } from '@angular/router';

import { GalleryService } from '../gallery.service';

import { Location } from '@angular/common';


@Component({
  selector: 'app-viewnature',
  templateUrl: './viewnature.component.html',
  styleUrls: ['./viewnature.component.css']
})
export class ViewnatureComponent implements OnInit {
  public currentImage;
  public natureImages;

  constructor(private _route: ActivatedRoute, private router: Router, public galleryService: GalleryService, private location: Location) {
    console.log("View abstract component constructor is called")
  }

  ngOnInit() {
    let myImageId = this._route.snapshot.paramMap.get('imgId');
    console.log(myImageId);


    this.currentImage = this.galleryService.getNatureImage(myImageId);
    console.log(this.currentImage);

    this.natureImages = this.galleryService.getnatureImages();
  }

  public goBackToPreviousPage(): any {
    this.location.back();
  }

}









