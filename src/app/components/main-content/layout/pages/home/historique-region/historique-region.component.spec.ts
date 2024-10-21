import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoriqueRegionComponent } from './historique-region.component';

describe('HistoriqueRegionComponent', () => {
  let component: HistoriqueRegionComponent;
  let fixture: ComponentFixture<HistoriqueRegionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HistoriqueRegionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HistoriqueRegionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
