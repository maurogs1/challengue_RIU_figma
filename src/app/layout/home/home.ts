import { Component } from '@angular/core';
import { Intro } from '../../components/intro/intro';
import { Catalog } from "../../components/catalog/catalog";
import { Gallery } from "../../components/gallery/gallery";

@Component({
  selector: 'app-home',
  imports: [Intro, Catalog, Gallery],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
