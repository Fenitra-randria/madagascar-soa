import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NatureBioComponent } from './nature-bio.component';

describe('NatureBioComponent', () => {
  let component: NatureBioComponent;
  let fixture: ComponentFixture<NatureBioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NatureBioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NatureBioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
