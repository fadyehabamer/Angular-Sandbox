import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NewComponentComponent } from './new-component/new-component.component';
import { CourseCardComponent } from "./course-card/course-card.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NewComponentComponent, CourseCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  title = 'Learn';
  Interpolation = 'Interpolation';
  data = {
    name: 'Angular',
    version: 9
  }


  readonly Courses:any = [
    { title: 'Angular', author: 'Mosh' },
    { title: 'React', author: 'Mosh' },
    { title: 'Vue', author: 'Mosh' }
  ]


  bestCourse = this.Courses[0];
  secondBestCourse = this.Courses[1];
  thirdBestCourse = this.Courses[2];



}
