import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HapusMhsPage } from './hapus-mhs.page';

describe('HapusMhsPage', () => {
  let component: HapusMhsPage;
  let fixture: ComponentFixture<HapusMhsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(HapusMhsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
