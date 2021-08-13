import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Product } from '../models/product';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
custom_products: Product[] = [{
  _id:"1",
  item_name: "Ladies Kurta",
  item_price: 120,
  item_img: "../../assets/products/dollar-gill-OzXgdT9TQ_k-unsplash-min.jpg",
  count: 1,
},
{
  _id:"2",
  item_name: "ladiesBlack and White Pant ",
  item_price: 325,
  item_img: "../../assets/products/joshua-rondeau-5fQZhtsQFwE-unsplash-min.jpg",
  count: 1 ,
},
{
  _id:"3",
  item_name: "Ladies Red Jacket",
  item_price: 435,
  item_img: "../../assets/products/joshua-rondeau-Lo09I-JrnNs-unsplash-min.jpg",
  count: 1 ,
},
{
  _id:"4",
  item_name: "Ladies Dotted white shirt",
  item_price: 56,
  item_img: "../../assets/products/laura-chouette-TmsFcl4SrYM-unsplash-min.jpg",
  count: 1 ,
},
{
  _id:"5",
  item_name: "Boys Hoodies",
  item_price: 140,
  item_img: "../../assets/products/rico-cori-eIjEDkRzbOQ-unsplash-min.jpg",
  count: 1 ,
},
{
  _id:"6",
  item_name: "Boys Black Jacket",
  item_price: 235,
  item_img: "../../assets/products/toa-heftiba-fLaB8LlEMNo-unsplash-min.jpg",
  count: 1 ,
},
{
  _id:"7",
  item_name: "Boys Red Black white Checked Shirt",
  item_price: 115,
  item_img: "../../assets/products/hamza-nouasria-u3WdX52t-UI-unsplash-min.jpg",
  count: 1 ,
}]

cartList:Product[] = new Array();
favoriteList:Product[] = new Array();
  constructor() { }

  getHomeProducts(){
    return of(this.custom_products);
  }
  isFevorite(item:Product){
    return this.favoriteList.find((value) => {return value._id === item._id })
  }
  addToFevorite(item:Product){
    let value = this.favoriteList.find((value) => {return value._id === item._id });
    if(value){
    this.favoriteList.splice(this.favoriteList.indexOf(item),1);
     return "Removed";
    }else{
      this.favoriteList.push(item);
      console.log(this.favoriteList);
      return "Item Added"
    }
    
  }
  addToCart(item:any){
    let value = this.cartList.find((value) => {return value._id === item._id });
    if(value){
      this.cartList.map((list) =>{(list._id == item._id)?list.count++:list.count=list.count} )
    }else{
      this.cartList.push(item);
    }
    console.log(this.cartList)
  }
  removeCart(item:any){
      
  }
}
