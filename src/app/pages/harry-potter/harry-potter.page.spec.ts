import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HarryPotterPage } from './harry-potter.page';

describe('HarryPotterPage', () => {
  let component: HarryPotterPage;
  let fixture: ComponentFixture<HarryPotterPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(HarryPotterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
