import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NewComponentComponent } from './new-component/new-component.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet , NewComponentComponent],
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
}
