import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffreDetailsComponent } from './offre-details.component';

describe('OffreDetailsComponent', () => {
  let component: OffreDetailsComponent;
  let fixture: ComponentFixture<OffreDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OffreDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OffreDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
