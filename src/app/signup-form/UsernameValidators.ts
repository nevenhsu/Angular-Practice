import { AbstractControl, ValidationErrors } from '@angular/forms';

export class UsernameValidators {
  static cantContainSpace(control: AbstractControl): ValidationErrors | null {
    if ((control.value as string).indexOf(' ') >= 0) {
      return { cantContainSpace: true };
    } else {
      return null;
    }
  }

  static shouldBeUnique(control: AbstractControl): Promise<ValidationErrors | null> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'mosh') {
          resolve({ shouldBeUnique: true});
        } else {
          return resolve(null);
        }
      }, 2000);
    });
  }
}

