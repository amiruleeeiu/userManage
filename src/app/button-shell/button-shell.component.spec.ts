import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonShellComponent } from './button-shell.component';

describe('ButtonShellComponent', () => {
  let component: ButtonShellComponent;
  let fixture: ComponentFixture<ButtonShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ButtonShellComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
