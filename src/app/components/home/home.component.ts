import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
 moveCharacter(event: MouseEvent): void {

    const hero = event.currentTarget as HTMLElement;

    const image = hero.querySelector(
      '.developer-image'
    ) as HTMLImageElement | null;

    if (!image) {
      return;
    }

    const rect = hero.getBoundingClientRect();

    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;

    const moveX = (x - 0.5) * 18;
    const moveY = (y - 0.5) * 14;

    const rotateY = (x - 0.5) * 12;
    const rotateX = (0.5 - y) * 10;

    image.style.setProperty('--move-x', `${moveX}px`);
    image.style.setProperty('--move-y', `${moveY}px`);
    image.style.setProperty('--rotate-y', `${rotateY}deg`);
    image.style.setProperty('--rotate-x', `${rotateX}deg`);
  }

  resetCharacter(): void {

    const image = document.querySelector(
      '.developer-image'
    ) as HTMLImageElement | null;

    if (!image) {
      return;
    }

    image.style.setProperty('--move-x', '0px');
    image.style.setProperty('--move-y', '0px');
    image.style.setProperty('--rotate-y', '0deg');
    image.style.setProperty('--rotate-x', '0deg');
  }

}
