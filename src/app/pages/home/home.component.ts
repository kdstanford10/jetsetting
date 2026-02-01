import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Functions, httpsCallable } from '@angular/fire/functions';

interface TripType {
  title: string;
  description: string;
  color: string;
  image?: string;
  imageClass?: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink, NgOptimizedImage],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  private functions = inject(Functions);
  private fb = inject(FormBuilder);

  // Services Data
  services: TripType[] = [
    {
      title: 'Family Vacation',
      description:
        'From traveling with young babies, to teens, I can plan it all. Give me the age ranges and type of vacation you want, and I will handle it from there!',
      color: 'bg-green-100 ring-1 ring-green-200',
      image: 'assets/Untitled-design123-683x1024.png',
      imageClass: 'object-[center_15%]',
    },
    {
      title: 'Romantic Getaway',
      description:
        'Whether it’s your honeymoon, your anniversary, or just because, I will plan it all for you. You and your partner just have to show up and enjoy!',
      color: 'bg-accent/20 ring-1 ring-accent/30',
      image: 'assets/Untitled-design131-683x1024.png',
    },
  ];

  // Contact Form
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
