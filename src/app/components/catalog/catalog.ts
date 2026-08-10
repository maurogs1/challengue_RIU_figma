import { Component } from '@angular/core';
import {catalog} from '../../mocks/catalog';
import { CatalogCard } from '../catalog-card/catalog-card';

@Component({
  selector: 'app-catalog',
  imports: [CatalogCard],
  templateUrl: './catalog.html',
  styleUrl: './catalog.css',
})
export class Catalog {
  catalogList = catalog;
}
