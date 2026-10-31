import { Component } from '@angular/core';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

 isSending = false;
  successMessage = '';
  errorMessage = '';

  async onSubmit(event: Event): Promise<void> {

    event.preventDefault();

    const form = event.target as HTMLFormElement;

    // Get form values
    const inputs = form.querySelectorAll('input, textarea');

    const name = (inputs[0] as HTMLInputElement).value.trim();
    const email = (inputs[1] as HTMLInputElement).value.trim();
    const subject = (inputs[2] as HTMLInputElement).value.trim();
    const message = (inputs[3] as HTMLTextAreaElement).value.trim();

    // EmailJS template parameters
    const templateParams = {
      name: name,
      email: email,
      title: subject,
      message: message
    };

    this.isSending = true;
    this.successMessage = '';
    this.errorMessage = '';

    try {

      await emailjs.send(
        'service_go8jgx3',
        'template_nscvmir',
        templateParams,
        'RYsAQcjko1epc6Mwi'
      );

      this.successMessage = 'Message sent successfully! Thank you for contacting me.';

      form.reset();

    } catch (error) {

      console.error('Email sending failed:', error);

      this.errorMessage = 'Failed to send message. Please try again later.';

    } finally {

      this.isSending = false;

    }
  }

}
