import { Component, input } from '@angular/core';

@Component({
  selector: 'app-catalog-card',
  imports: [],
  templateUrl: './catalog-card.html',
  styleUrl: './catalog-card.css',
})
export class CatalogCard {
  
  src = input<string>();
  title = input<string>();
  subtitle = input<string>();
  text = input<string>();
  alt = input<string>();
  imgSubtitle = input<string>();
  

}
