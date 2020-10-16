import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDetailsTwoComponent } from './user-details-two.component';

describe('UserDetailsTwoComponent', () => {
  let component: UserDetailsTwoComponent;
  let fixture: ComponentFixture<UserDetailsTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserDetailsTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDetailsTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
