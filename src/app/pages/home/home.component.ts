import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { SwiperComponent } from "swiper/angular";
// import Swiper core and required modules
import SwiperCore, { Autoplay,Pagination } from "swiper/core";

// install Swiper modules
SwiperCore.use([Autoplay,Pagination]);

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HomeComponent implements OnInit {
  heroList=[
    {
      url: "../../../assets/images/heroImg1.jpg",
      p1:"Women Season 2021",
      h1:"New Collection",
      button: ()=>{

      }
    },
      {
        url: "../../../assets/images/heroImg2.jpg",
        p1:"Men Season 2021",
        h1:"New Collection",
        button: ()=>{
            
        }
      }
      ]

      mensSection=[
        {url : "../../../assets/images/men/clark-street-mercantile-qnKhZJPKFD8-unsplash.jpg", text:"Men's"},
        {url : "../../../assets/images/men/jonathan-francisca-YHbcum51JB0-unsplash.jpg", text:"Formal"},
        {url : "../../../assets/images/men/jonathan-borba-WbQxNLcyGqA-unsplash.jpg", text:"Hoodie"},
        {url : "../../../assets/images/men/nordwood-themes-Nv4QHkTVEaI-unsplash.jpg", text:"Shoes"}]
        womensSection=[
          {url : "../../../assets/images/women/hannah-morgan-ycVFts5Ma4s-unsplash.jpg" ,text:"Women's"},
          {url : "../../../assets/images/women/eli-defaria-oV4PktGcXCs-unsplash.jpg", text:"Pinafore"},
          {url : "../../../assets/images/women/tamara-bellis-68csPWTnafo-unsplash.jpg", text:"Wrap"},
          {url : "../../../assets/images/women/mike-von-TPUGbQmyVwE-unsplash.jpg", text:"Casual"},
          {url : "../../../assets/images/women/content-pixie-ZB4eQcNqVUs-unsplash.jpg", text:"Bags & Watches"}]
  constructor() { }

  ngOnInit(): void {
  }

}
