import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ValidationService } from './validation.service';

@Component({
  selector: 'app-error-messsage',
  template: `
<div *ngIf="errorMessage !== null" class="error-container">
 <span class="error-text">{{ errorMessage }}</span>
</div>
  `,
  styleUrls: ['./error-messsage.component.css']
})
export class ErrorMesssageComponent {
  @Input() control: FormGroup | FormControl;

  get errorMessage() {
    for (let key in this.control.errors) {
      if (this.control.errors.hasOwnProperty(key) && this.control.dirty) {
        return ValidationService.getValidationMessage(
          key,
          this.control.errors[key]
        );
      }
    }

    return null;
  }
}
