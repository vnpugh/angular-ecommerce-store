import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectiblesComponent } from './collectibles.component';

describe('CollectiblesComponent', () => {
  let component: CollectiblesComponent;
  let fixture: ComponentFixture<CollectiblesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CollectiblesComponent]
    });
    fixture = TestBed.createComponent(CollectiblesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
