import { Component, OnInit } from '@angular/core';

import * as $ from 'jquery';
import 'bootstrap';


@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  constructor() { }

  ngOnInit() {
 
    this.initCarousel();
  }

  private initCarousel() {

    $('.carousel').carousel({
      interval: 1000
    });
  }
}
