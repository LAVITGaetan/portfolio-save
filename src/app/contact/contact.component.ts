import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {

  contactForm = new FormGroup({
    email : new FormControl('', [Validators.required, Validators.email]),
    object : new FormControl('', [Validators.required, Validators.minLength(10)]),
    message : new FormControl('', [Validators.required, Validators.minLength(6)]),
  })

  submitForm(e: Event) {
    e.preventDefault();
    alert('submitted')
    console.log(this.contactForm.get('email')?.value);
    console.log(this.contactForm.get('object')?.value);
    console.log(this.contactForm.get('message')?.value);

    console.log(e.target as HTMLFormElement);
    
    emailjs
      .sendForm('service_k1ldti7', 'template_vctb17y', e.target as HTMLFormElement, {
        publicKey: 'tI_GYCmxxx1ocbTk6',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', (error as EmailJSResponseStatus).text);
        },
      );
  }
}
