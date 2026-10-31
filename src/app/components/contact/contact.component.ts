import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {



  onSubmit(event: Event): void {

    event.preventDefault();

    const form = event.target as HTMLFormElement;

    const inputs = form.querySelectorAll('input, textarea');

    const name = (inputs[0] as HTMLInputElement).value;
    const email = (inputs[1] as HTMLInputElement).value;
    const subject = (inputs[2] as HTMLInputElement).value;
    const message = (inputs[3] as HTMLTextAreaElement).value;

    const mailBody = `
Name: ${name}
Email: ${email}

Message:
${message}
    `;

    const mailtoLink =
      `mailto:chandrasekharmadavaram19@gmail.com` +
      `?subject=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(mailBody)}`;

    window.location.href = mailtoLink;

  }

}
