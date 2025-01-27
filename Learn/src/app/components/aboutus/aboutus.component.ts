import { Component } from '@angular/core';
import { ValuesComponent } from "../values/values.component";
import { VisionComponent } from "../vision/vision.component";
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-aboutus',
  imports: [ValuesComponent, VisionComponent , RouterOutlet , RouterLink],
  templateUrl: './aboutus.component.html',
  styleUrl: './aboutus.component.scss'
})
export class AboutusComponent {

}
