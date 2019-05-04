import { Component, OnInit, OnDestroy } from '@angular/core';

//importing route related code
import { ActivatedRoute, Router } from '@angular/router';
import { GalleryService } from '../gallery.service';

@Component({
  selector: 'app-abstract',
  templateUrl: './abstract.component.html',
  styleUrls: ['./abstract.component.css']
})
export class AbstractComponent implements OnInit {

  public abstractImages;
  constructor(private _route: ActivatedRoute, private router: Router, public galleryService: GalleryService) {
    console.log("Abstract component constructor is called");
  }

  ngOnInit() {
    console.log("spiritual component oninit called");
    this.abstractImages = this.galleryService.getabstractImages();
    return this.abstractImages;
  }

  ngOnDestroy() {
    console.log("abstract component destroyed");

  }


}















