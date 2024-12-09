import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SpellListPage } from './spell-list.page';

describe('SpellListPage', () => {
  let component: SpellListPage;
  let fixture: ComponentFixture<SpellListPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SpellListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
