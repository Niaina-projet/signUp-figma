import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-social-button',
  imports: [CommonModule],
  templateUrl: './social-button.html',
  styleUrl: './social-button.scss',
})
export class SocialButton {
  @Input() label: string = '';
  @Input() iconSrc: string = '';

}
