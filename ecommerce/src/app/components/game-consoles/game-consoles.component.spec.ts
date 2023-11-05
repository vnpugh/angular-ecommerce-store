import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameConsolesComponent } from './game-consoles.component';

describe('GameConsolesComponent', () => {
  let component: GameConsolesComponent;
  let fixture: ComponentFixture<GameConsolesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GameConsolesComponent]
    });
    fixture = TestBed.createComponent(GameConsolesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
