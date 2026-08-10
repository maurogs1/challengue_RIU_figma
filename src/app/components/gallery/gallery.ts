import { Component } from '@angular/core';
import { gallery } from '../../mocks/gallery';
import { GalleryCard } from '../gallery-card/gallery-card';

@Component({
  selector: 'app-gallery',
  imports: [GalleryCard],
  templateUrl: './gallery.html',
  styleUrl: './gallery.css',
})
export class Gallery {

  galleryList = gallery;

}
