import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GuestLoginPage } from './guest-login.page';

describe('GuestLoginPage', () => {
  let component: GuestLoginPage;
  let fixture: ComponentFixture<GuestLoginPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(GuestLoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
