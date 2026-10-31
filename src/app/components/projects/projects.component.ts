import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {

   projects = [
    {
      name: 'PX Works',
      description: 'A flash storage array solution focused on reduced IT project risk, optimized costs, better integration and lower latency.',
      role: 'Senior Associate Consultant',
      technologies: ['Angular 17', 'TypeScript', 'RxJS', 'JavaScript', 'Angular Material', 'GitHub']
    },
    {
      name: 'Digital VAC',
      description: 'An online visa application system with verification using application URN number, Barcode or Passport number.',
      role: 'UI Developer',
      technologies: ['Angular 15', 'TypeScript', 'RxJS', 'JavaScript', 'HTML5', 'CSS3']
    },
    {
      name: 'BAT (British American Tobacco)',
      description: 'Frontend web application development for BAT business requirements.',
      role: 'Associate IT Consultant',
      technologies: ['Angular 10', 'TypeScript', 'RxJS', 'JavaScript', 'HTML5', 'CSS3', 'Bootstrap']
    },
    {
      name: 'Patient Engagement Manager',
      description: 'A healthcare communication platform that helps providers prepare patients for appointments and follow care plans.',
      role: 'Senior Consultant',
      technologies: ['Angular 10', 'TypeScript', 'RxJS', 'JavaScript', 'HTML5', 'CSS', 'Bootstrap']
    },
    {
      name: 'XASSURE',
      description: 'An enterprise security solution providing monitoring and analysis across networks and endpoints.',
      role: ' Senior Consultant',
      technologies: ['Angular 10', 'TypeScript', 'RxJS', 'JavaScript', 'HTML5', 'CSS3']
    },
    {
      name: 'TSRM',
      description: 'Trade Status and Report Monitoring application that processes trade information and displays reporting dashboards.',
      role: 'Consultant',
      technologies: ['Angular 8', 'RxJS', 'HTML5', 'CSS3', 'JavaScript', 'ES6', 'jQuery']
    },
    {
      name: 'Material Optimization Suite',
      description: 'Industrial IoT software applications connecting energy traders with real-time plant productivity and capacity data.',
      role: 'Consultant',
      technologies: ['Angular 8', 'HTML5', 'CSS3', 'JavaScript', 'ES6', 'jQuery']
    },
    {
      name: 'ZEVA',
      description: 'A healthcare web application providing access to doctors, nurses, physiotherapists and other medical services.',
      role: 'Software Engineer',
      technologies: ['Angular 6', 'HTML5', 'CSS3', 'JavaScript', 'ES6', 'jQuery', 'AJAX']
    },
    {
      name: 'Vernacular',
      description: 'A web application related to traditional architecture, local materials and culturally relevant building practices.',
      role: 'Software Engineer',
      technologies: ['Angular', 'HTML5', 'CSS3', 'Bootstrap', 'JavaScript', 'ES6', 'jQuery', 'AJAX']
    },
    {
      name: 'Rivi Recruitment',
      description: 'A recruitment web application supporting the process of attracting, shortlisting and selecting candidates.',
      role: 'Software Engineer',
      technologies: ['Angular 2', 'HTML5', 'CSS3', 'Bootstrap', 'JavaScript', 'ES6', 'jQuery', 'AJAX']
    }
  ];
}
