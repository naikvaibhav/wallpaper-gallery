import { Component, OnInit, OnDestroy } from '@angular/core';

//importing route related code
import { ActivatedRoute, Router } from '@angular/router';
import { GalleryService } from '../gallery.service';

@Component({
  selector: 'app-nature',
  templateUrl: './nature.component.html',
  styleUrls: ['./nature.component.css']
})
export class NatureComponent implements OnInit, OnDestroy {
  public natureImages;

  constructor(private _route: ActivatedRoute, private router: Router, public galleryService: GalleryService) {
    console.log("Nature component constructor is called");
  }
  ngOnInit() {
    console.log("nature component oninit called");
    this.natureImages = this.galleryService.getnatureImages();
    return this.natureImages;
  }

  ngOnDestroy() {
    console.log("abstract component destroyed");

  }
}





















