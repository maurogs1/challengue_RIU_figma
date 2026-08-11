import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from './layout/home/home';

@Component({
  selector: 'app-root',
  imports: [ Home],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}
