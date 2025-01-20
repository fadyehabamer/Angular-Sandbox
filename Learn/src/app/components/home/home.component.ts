import { Component } from '@angular/core';
import { Istore } from '../../Models/istore';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  myStore:Istore;

  constructor() { 
    this.myStore = {
      id: 1,
      name: 'My Store',
      description: 'This is my store',
      imageUrl: 'assets/images/products/image1.jpg',
      branches: ['Branch 1', 'Branch 2', 'Branch 3']
    }
  }




}
