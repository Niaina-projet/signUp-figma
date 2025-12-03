import { Component } from '@angular/core';
import { SocialButton } from '../shared/components/social-button/social-button';
import { InputField } from '../shared/components/input-field/input-field';

@Component({
  selector: 'app-sign-up',
  imports: [SocialButton,InputField],
  templateUrl: './sign-up.html',
  styleUrl: './sign-up.scss',
})
export class SignUp {

}
