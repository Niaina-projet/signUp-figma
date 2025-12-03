import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-input-field',
  imports: [CommonModule],
  templateUrl: './input-field.html',
  styleUrl: './input-field.scss',
})
export class InputField {
  @Input() placeholder: string='';
  @Input() type: string='text';

  isPasswordHidden: boolean = true;

  get currentType(): string{
    if (this.type !== 'password') {
      return this.type;
    }

    return this.isPasswordHidden ? 'password' : 'text';
  }

  togglePassword() {
    this.isPasswordHidden = !this.isPasswordHidden;
  }
}
