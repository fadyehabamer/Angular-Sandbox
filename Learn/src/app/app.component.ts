import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { PrimeNG } from 'primeng/config';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { HomeComponent } from "./components/home/home.component";
import { FooterComponent } from "./components/footer/footer.component";
import { AboutusComponent } from './components/aboutus/aboutus.component';

@Component({
  // component selector - the name of the html tag - directive name
  selector: 'app-root',

  imports: [RouterOutlet, NavbarComponent, HomeComponent, FooterComponent,
      AboutusComponent,
      
  ],
  
  templateUrl: './app.component.html',
  
  
  styleUrl: './app.component.scss',
})
export class AppComponent {
  // constructor
  // before the component is created
  constructor(private primeng: PrimeNG) {
  }
  ngOnInit() {

    this.primeng.ripple.set(true);
  }
}
