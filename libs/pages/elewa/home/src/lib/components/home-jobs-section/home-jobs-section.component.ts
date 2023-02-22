import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'elewa-group-home-jobs-section',
  templateUrl: './home-jobs-section.component.html',
  styleUrls: ['./home-jobs-section.component.scss'],
})
export class HomeJobsSectionComponent {
  @Input() message = 'Become part of our mission. And start ';
  @Input() callToAction = 'investing';
  @Input() url = 'https://italanta.net/';
  @Input() textAlign = 'center';
  constructor(private router: Router) {}
  // Function to navigate when call to action link is clicked
  navigate() {
    window.location.href = this.url;
  }
}
