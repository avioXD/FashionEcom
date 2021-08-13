import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//primeng module
import { PrimeNgModule } from './modules/prime-ng/prime-ng.module';

//imported Modules
import { MaterialModule } from './modules/material/material.module';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule,  ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
//History: 
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { SwiperModule } from 'swiper/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ShopComponent } from './pages/shop/shop.component';
import { FeaturesComponent } from './pages/features/features.component';
import { AboutComponent } from './pages/about/about.component';
import { BlogsComponent } from './pages/blogs/blogs.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { CounterComponent } from './components/buttons/counter/counter.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductsSliderComponent } from './components/products-slider/products-slider.component';
 
 

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ShopComponent,
    FeaturesComponent,
    AboutComponent,
    BlogsComponent,
    ProfileComponent,
    NavBarComponent,
    FooterComponent,
    CounterComponent,
    RegisterComponent,
    LoginComponent,
    ProductsComponent,
    ProductsSliderComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,  ReactiveFormsModule,
    HttpClientModule,
    RouterModule,PrimeNgModule,
    MaterialModule,
    SwiperModule
  ],
  providers: [{provide:LocationStrategy , useClass:HashLocationStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule { }
