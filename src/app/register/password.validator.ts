import { AbstractControl, ValidationErrors } from '@angular/forms';

export class loginFormValidator {
  static validatePassword(control: AbstractControl): ValidationErrors | null {
    const initialPassword = control.get('password');
    const confirmPassword = control.get('confirmPassword');
    if (initialPassword.pristine || confirmPassword.pristine) {
      return null;
    }
    return initialPassword &&
      confirmPassword &&
      initialPassword.value !== confirmPassword.value
      ? ({ mismatch: true })
      : null;
  }
}
