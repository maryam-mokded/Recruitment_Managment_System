import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecruteurComponent } from './recruteur.component';

describe('RecruteurComponent', () => {
  let component: RecruteurComponent;
  let fixture: ComponentFixture<RecruteurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecruteurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecruteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
