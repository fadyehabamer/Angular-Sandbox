import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { ProductsComponent } from './components/products/products.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { ValuesComponent } from './components/values/values.component';
import { VisionComponent } from './components/vision/vision.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'aboutus',
    component: AboutusComponent,
    children: [
      { path: '', redirectTo: 'values', pathMatch: 'full' },
      { path: 'values', component: ValuesComponent },
      { path: 'vision', component: VisionComponent },
    ],
  },
  { path: 'products', component: ProductsComponent },
  { path: 'productsDetails/:id', component: ProductDetailsComponent },
  { path: '**', component: NotfoundComponent },
];
