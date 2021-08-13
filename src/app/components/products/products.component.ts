import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
ProductService
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
@Input() item:any
  constructor(private productService: ProductService) { }
  fevorite!: any;
  ngOnInit(): void {
  }
  addToCart(item:any){
    this.productService.addToCart(item);
  }
  addToFev(item:any){
    this.productService.addToFevorite(item);
  }
  isFevorite(item:any){
    this.fevorite =  this.productService.isFevorite(item);
  }

}
