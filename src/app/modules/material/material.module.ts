import { NgModule } from '@angular/core';
 
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatInputModule} from '@angular/material/input';
import {MatRippleModule} from '@angular/material/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatMenuModule} from '@angular/material/menu';
import {MatBadgeModule} from '@angular/material/badge';
import {MatTooltipModule} from '@angular/material/tooltip';
const MaterialsComponent = [
  MatButtonModule,
  MatIconModule,
  MatDividerModule,
  MatInputModule,
  MatRippleModule,
  MatToolbarModule,
  DragDropModule,
  MatMenuModule,
  MatBadgeModule,
  MatTooltipModule
]
@NgModule({
   
  imports: [MaterialsComponent],
  exports:[MaterialsComponent]
})
export class MaterialModule { }
