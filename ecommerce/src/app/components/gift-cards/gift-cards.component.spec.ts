import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiftCardsComponent } from './gift-cards.component';

describe('GiftCardsComponent', () => {
  let component: GiftCardsComponent;
  let fixture: ComponentFixture<GiftCardsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GiftCardsComponent]
    });
    fixture = TestBed.createComponent(GiftCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
