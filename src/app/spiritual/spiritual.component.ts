import { Component, OnInit, OnDestroy } from '@angular/core';

//importing route related code
import { ActivatedRoute, Router } from '@angular/router';

import { GalleryService } from '../gallery.service';

@Component({
  selector: 'app-spiritual',
  templateUrl: './spiritual.component.html',
  styleUrls: ['./spiritual.component.css']
})
export class SpiritualComponent implements OnInit, OnDestroy {
  public spiritualImages;
  //public modalspiritualImages;

  constructor(private _route: ActivatedRoute, private router: Router, public galleryService: GalleryService) {
    console.log("Spiritual component constructor is called");
  }
  ngOnInit() {
    //this.modalspiritualImages = this.galleryService.getImages();


    console.log("spiritual component oninit called");
    this.spiritualImages = this.galleryService.getImages();
    return this.spiritualImages;



  }

  ngOnDestroy() {
    console.log("spiritual component destroyed");

  }

}
