import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardcardBodyComponent } from './cardcard-body.component';

describe('CardcardBodyComponent', () => {
  let component: CardcardBodyComponent;
  let fixture: ComponentFixture<CardcardBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardcardBodyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardcardBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
