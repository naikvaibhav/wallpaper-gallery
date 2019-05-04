import { Component, ViewEncapsulation } from '@angular/core';
//viewencapsulation is used for applying background color to the whole website,the style is applies in app.component.css
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'wallpaper-gallery';
}
