import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDetailsThreeComponent } from './user-details-three.component';

describe('UserDetailsThreeComponent', () => {
  let component: UserDetailsThreeComponent;
  let fixture: ComponentFixture<UserDetailsThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserDetailsThreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDetailsThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
