import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
 
@Component({
  selector: 'app-products-slider',
  templateUrl: './products-slider.component.html',
  styleUrls: ['./products-slider.component.scss']
})
export class ProductsSliderComponent implements OnInit {
  product:any;
  constructor(private products: ProductService) { }

  ngOnInit(): void {
    this.products.getHomeProducts().subscribe((data)=>{
      this.product = data;
    })
  }

}
