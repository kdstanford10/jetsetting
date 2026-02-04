/**
 * Import function triggers from their respective submodules:
 *
 * import {onCall} from "firebase-functions/v2/https";
 * import {onDocumentWritten} from "firebase-functions/v2/firestore";
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

import { setGlobalOptions } from 'firebase-functions';
import { onCall, HttpsError } from 'firebase-functions/v2/https';
import * as logger from 'firebase-functions/logger';
import { initializeApp } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';

initializeApp();

// Start writing functions
// https://firebase.google.com/docs/functions/typescript

setGlobalOptions({ maxInstances: 10 });

interface ContactRequest {
  name: string;
  email: string;
  phone?: string;
  tripType: string;
  message: string;
}

export const submitContactForm = onCall<ContactRequest>(
  { enforceAppCheck: true },
  async (request) => {
    // 1. Validation
    const { name, email, phone, tripType, message } = request.data;

    if (!name || !email || !message) {
      throw new HttpsError('invalid-argument', 'Missing required fields.');
    }

    // Basic email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      throw new HttpsError('invalid-argument', 'Invalid email format.');
    }

    // 2. Prepare data for Firestore Email Extension
    // The extension listens to the 'mail' collection (by default)
    const mailData = {
      to: ['Hello+contact@jetsettingwithkayla.com'], // The recipient(s)
      message: {
        from: 'Jetsetting with Kayla <noreply@jetsettingwithkayla.com>',
        subject: `New Contact Request from ${name} - ${tripType}`,
        replyTo: email,
        html: `
              <h2>New Contact Request</h2>
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
              <p><strong>Trip Type:</strong> ${tripType}</p>
              <p><strong>Message:</strong></p>
              <p>${message.replace(/\n/g, '<br>')}</p>
          `,
      },
      originalRequest: request.data,
      submittedAt: new Date().toISOString(),
    };

    // 3. Save to Firestore
    try {
      await getFirestore().collection('mail').add(mailData);
      return { success: true, message: 'Message received!' };
    } catch (error) {
      logger.error('Error saving contact form:', error);
      throw new HttpsError('internal', 'Unable to save contact request.');
    }
  },
);
