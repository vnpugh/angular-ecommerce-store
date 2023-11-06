import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {
  slides = [
    { img: "assets/slider-img-1.png" },
    { img: "assets/slider-img-2.png" },
    { img: "assets/slider-img-3.png" }

  ];

  slideConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, 
    pauseOnHover: true,
    infinite: true,
    arrows: true,
    dots: true,

    responsive: [
      {
        breakpoint: 992,
        settings: {
          arrows: true, 
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          arrows: true, 
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
}
