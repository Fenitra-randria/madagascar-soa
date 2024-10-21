import { Component, OnInit, inject } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-internationalization',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './internationalization.component.html',
  styleUrl: './internationalization.component.scss',
})
export class InternationalizationComponent implements OnInit {
  private readonly translateService = inject(TranslateService);
  public readonly availableLanguages = ['fr', 'en'];

  ngOnInit(): void {
    this.translateService.addLangs(this.availableLanguages);
    this.translateService.get('title').subscribe(console.log);
  }
  changeLang(lang: any) {
    this.translateService.use(lang.target.value);
  }
}
