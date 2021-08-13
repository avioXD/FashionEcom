import { Component } from '@angular/core';
import {MenuItem} from 'primeng/api';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  theme: number = 1;
  title: string = "Fasionable"
  ngOnInit() {
  }
  select(theme:any){
    this.theme = theme
  }
}
