import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent { 
  contactForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', Validators.required],
    message: ['', Validators.required],
    shouldAddToNewsletter: [false],
  });

  constructor(private fb: FormBuilder) {}

  showMsg: boolean = false;
  isSubmitted: boolean = false;
  onSubmit(): void {
    this.isSubmitted = true;
    if(this.contactForm.valid) {
      this.showMsg = true;
      this.isSubmitted = false;
      this.contactForm.reset();
    }
  }

}
