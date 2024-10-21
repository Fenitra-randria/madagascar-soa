import { Component } from '@angular/core';
import { HeroComponent } from "./hero/hero.component";
import { HistoriqueRegionComponent } from "./historique-region/historique-region.component";
import { NatureBioComponent } from "./nature-bio/nature-bio.component";
import { TourismeComponent } from "./tourisme/tourisme.component";
import { CuisineComponent } from "./cuisine/cuisine.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent, HistoriqueRegionComponent, NatureBioComponent, TourismeComponent, CuisineComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
