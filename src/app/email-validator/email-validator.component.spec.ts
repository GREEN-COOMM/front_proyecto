import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { EmailValidatorComponent } from './email-validator.component';

describe('EmailValidatorComponent', () => {
  let component: EmailValidatorComponent;
  let fixture: ComponentFixture<EmailValidatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmailValidatorComponent],
      imports: [ReactiveFormsModule]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a form with an email control', () => {
    expect(component.form.contains('email')).toBeTrue();
  });

  it('should mark the email as invalid if empty', () => {
    const emailControl = component.form.controls['email'];
    emailControl.setValue('');
    expect(emailControl.valid).toBeFalse();
  });

  it('should mark the email as invalid if not a valid email', () => {
    const emailControl = component.form.controls['email'];
    emailControl.setValue('invalid-email');
    expect(emailControl.valid).toBeFalse();
  });

  it('should mark the email as valid if it is a valid email', () => {
    const emailControl = component.form.controls['email'];
    emailControl.setValue('test@example.com');
    expect(emailControl.valid).toBeTrue();
  });
});

