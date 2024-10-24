import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';
import { environment } from 'src/environment/environment';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  formResult: string = ''
  isLoading: boolean = false
  contactForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    object: new FormControl('', [Validators.required, Validators.minLength(10)]),
    message: new FormControl('', [Validators.required, Validators.minLength(6)]),
  })

  submitForm(e: Event) {
    this.isLoading = true
    e.preventDefault();
    emailjs
      .sendForm(environment.emailJsServiceId, environment.emailJsTemplateId, e.target as HTMLFormElement, {
        publicKey: environment.emailJsPublicKey,
      })
      .then(
        () => {
          console.log('SUCCESS!');
          this.formResult = 'success'
          this.isLoading = false
        },
        (error) => {
          console.log('FAILED...', (error as EmailJSResponseStatus).text);
          this.formResult = 'error'
          this.isLoading = false
        },
      );

  }
}
