import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroOverlayComponent } from './hero-overlay.component';

describe('HeroOverlayComponent', () => {
  let component: HeroOverlayComponent;
  let fixture: ComponentFixture<HeroOverlayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroOverlayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroOverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
