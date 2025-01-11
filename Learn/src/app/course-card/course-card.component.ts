import { ICourse } from '../app.component.models';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-course-card',
  imports: [],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.scss'
})
export class CourseCardComponent {
  @Input() Course : ICourse = {} as ICourse;
}
