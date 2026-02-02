import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UbahMhsPage } from './ubah-mhs.page';

describe('UbahMhsPage', () => {
  let component: UbahMhsPage;
  let fixture: ComponentFixture<UbahMhsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(UbahMhsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
