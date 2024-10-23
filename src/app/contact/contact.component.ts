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

  submitForm() {
    alert('submitted')
    console.log(this.contactForm.get('email')?.value);
    console.log(this.contactForm.get('object')?.value);
    console.log(this.contactForm.get('message')?.value);
    
  }
}
