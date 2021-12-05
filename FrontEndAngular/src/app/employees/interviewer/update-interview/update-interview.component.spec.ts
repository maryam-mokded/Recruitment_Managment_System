import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateInterviewComponent } from './update-interview.component';

describe('UpdateInterviewComponent', () => {
  let component: UpdateInterviewComponent;
  let fixture: ComponentFixture<UpdateInterviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateInterviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateInterviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
