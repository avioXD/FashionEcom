import { Component, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit   {
  toggle: boolean = true
  constructor() { }
  isLogin = false;
  ngOnInit(): void {
  }
   
}
