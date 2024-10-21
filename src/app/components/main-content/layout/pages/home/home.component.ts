import { Component } from '@angular/core';
import { HeroComponent } from "./hero/hero.component";
import { HistoriqueRegionComponent } from "./historique-region/historique-region.component";
import { NatureBioComponent } from "./nature-bio/nature-bio.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent, HistoriqueRegionComponent, NatureBioComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
