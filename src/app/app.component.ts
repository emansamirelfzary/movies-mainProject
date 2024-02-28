import { Component, OnInit } from '@angular/core';
import { ScrollService } from './shared/services/scroll.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'movies';

  constructor(private scrollService: ScrollService) { }



}
