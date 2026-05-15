import { Component } from '@angular/core';
import { SafelinkDirective } from '../safe-link.directive';

@Component({
  selector: 'app-learning-resources',
  templateUrl: './learning-resources.component.html',
  styleUrl: './learning-resources.component.css',
  standalone: true,
  imports: [SafelinkDirective]
})

export class LearningResourcesComponent { }
