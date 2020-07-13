import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthenticationKeyboardComponent } from './authentication-keyboard.component';

describe('AuthenticationKeyboardComponent', () => {
  let component: AuthenticationKeyboardComponent;
  let fixture: ComponentFixture<AuthenticationKeyboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthenticationKeyboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthenticationKeyboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
