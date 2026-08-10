import { Component } from '@angular/core';
import { Intro } from '../../components/intro/intro';
import { Catalog } from "../../components/catalog/catalog";

@Component({
  selector: 'app-home',
  imports: [Intro, Catalog],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
