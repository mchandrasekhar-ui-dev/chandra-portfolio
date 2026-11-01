import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './components/about/about.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HomeComponent,HeaderComponent,
    AboutComponent,SkillsComponent,ExperienceComponent,
  ProjectsComponent,ContactComponent,FooterComponent],
  templateUrl: './app.component.html',  
  styleUrl: './app.component.css'
})
export class AppComponent {

 @ViewChild('cursor')
cursor!: ElementRef<HTMLDivElement>;

private mouseX = 0;
private mouseY = 0;

@HostListener('document:mousemove', ['$event'])
onMouseMove(event: MouseEvent): void {

  if (!this.cursor) return;

  this.mouseX = event.clientX;
  this.mouseY = event.clientY;

  this.cursor.nativeElement.style.left =
    `${this.mouseX}px`;

  this.cursor.nativeElement.style.top =
    `${this.mouseY}px`;
}

@HostListener('document:mouseover', ['$event'])
onMouseOver(event: MouseEvent): void {

  if (!this.cursor) return;

  const target = event.target as HTMLElement;

  if (target.closest('a, button, input, textarea')) {
    this.cursor.nativeElement.classList.add('cursor-hover');
  } else {
    this.cursor.nativeElement.classList.remove('cursor-hover');
  }
}
}
