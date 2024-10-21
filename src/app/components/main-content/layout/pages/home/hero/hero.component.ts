import { Component } from '@angular/core';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [SlickCarouselModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
  slides = [
    {img: "https://www.en-vols.com/wp-content/uploads/afmm/2023/04/GettyImages-468053398_HEADER_Sites_naturels_Madagascar_MED.jpg"},
    {img: "https://www.legrandbleunosybe.com/wp-content/uploads/2015/10/Tsingy-Mada.webp"},
    {img: "https://www.tracedirecte.com/media/original_images/lemurien-queue-blanche.jpg.1920x0_q85_format-jpg.jpg"},
    {img: "https://jennyetbenoit.fr/wp-content/uploads/2023/08/Que-faire-sur-lile-de-Nosy-Be-a-Madagascar-scaled.jpg"}
  ];
  loadedSlick: boolean = false;
  slideConfig = {
    "slidesToShow": 1,
    "slidesToScroll": 1,
    "autoplay": true,
    "autoplaySpeed": 5000,
    "speed": 3000
  };

  slickInit(e: any) {
    console.log('slick initialized');
    this.loadedSlick = true;
  }
}
