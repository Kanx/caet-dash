import {AbstractControl} from '@angular/forms';

export function noAmpersandValidator(control: AbstractControl): { [key: string]: boolean } | null {
  return control.value.includes('&') ? { 'hasAmpersand': true } : null;
}
