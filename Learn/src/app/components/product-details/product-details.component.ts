import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StaticProductsService } from '../../services/static-products.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  imports: [],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss',
})
export class ProductDetailsComponent implements OnInit {
  
  // productId: string;
  product: any;

  constructor(
    private router: Router,
    private _staticProductsService: StaticProductsService,
    private _activatedRoute: ActivatedRoute
  ) {
    // this.productId = this.router.url.split('/')[2];
    // this.product = this._staticProductsService.getProductById(+this.productId);
  }


  // ngOnInit() {
  //   this._activatedRoute.params.subscribe((params) => {
  //     this.productId = params['id'];
  //     this.product = this._staticProductsService.getProductById(+this.productId);
  //   });
  // }

  ngOnInit() {
    console.log(this._activatedRoute.snapshot.paramMap);
    // console.log(this._activatedRoute.snapshot.params['id']);
    this._activatedRoute.params.subscribe((params) => {
      this.product = this._staticProductsService.getProductById(+params['id']);
    });
  }

}
