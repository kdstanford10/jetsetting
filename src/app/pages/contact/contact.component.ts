import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Functions, httpsCallable } from '@angular/fire/functions';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  providers: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  private functions = inject(Functions);
  private fb = inject(FormBuilder);

  contactForm: FormGroup = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    phone: [''],
    tripType: ['Family Vacation', Validators.required],
    message: ['', Validators.required],
  });

  isSubmitting = false;
  submitSuccess = false;
  submitError = '';

  async onSubmit() {
    if (this.contactForm.invalid) return;

    this.isSubmitting = true;
    this.submitError = '';

    try {
      const submitFn = httpsCallable(this.functions, 'submitContactForm');
      await submitFn(this.contactForm.value);
      this.submitSuccess = true;
      this.contactForm.reset({ tripType: 'Family Vacation' });
    } catch (error) {
      console.error(error);
      this.submitError = 'There was a problem sending your message. Please try again later.';
    } finally {
      this.isSubmitting = false;
    }
  }
}
