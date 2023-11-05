import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PcGamingComponent } from './pc-gaming.component';

describe('PcGamingComponent', () => {
  let component: PcGamingComponent;
  let fixture: ComponentFixture<PcGamingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PcGamingComponent]
    });
    fixture = TestBed.createComponent(PcGamingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
