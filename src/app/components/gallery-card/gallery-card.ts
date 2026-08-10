import { Component, input } from '@angular/core';

@Component({
  selector: 'app-gallery-card',
  imports: [],
  templateUrl: './gallery-card.html',
  styleUrl: './gallery-card.css',
})
export class GalleryCard {

  src = input<string>();
  alt = input<string>();
  title = input<string>();
  subtitle = input<string>();
  downloadText = input<string>();

}
