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
    email: ['', [Validators.required, Validators.pattern(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)]],
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

  onPhoneInput(event: Event) {
    const input = event.target as HTMLInputElement;
    let value = input.value.replace(/\D/g, ''); // Strip non-digits

    // Limit to 10 digits
    if (value.length > 10) {
      value = value.substring(0, 10);
    }

    // Format as (XXX) XXX-XXXX
    let formatted = '';
    if (value.length > 0) {
      formatted = `(${value.substring(0, 3)}`;
    }
    if (value.length > 3) {
      formatted += `) ${value.substring(3, 6)}`;
    }
    if (value.length > 6) {
      formatted += `-${value.substring(6, 10)}`;
    }

    this.contactForm.get('phone')?.setValue(formatted, { emitEvent: false });
  }
}
