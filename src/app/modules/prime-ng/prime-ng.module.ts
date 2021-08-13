import { NgModule } from '@angular/core';
import { CalendarModule } from 'primeng/calendar';
import {AccordionModule} from 'primeng/accordion';
import {ButtonModule} from 'primeng/button';
import {AvatarModule} from 'primeng/avatar';
import {AvatarGroupModule} from 'primeng/avatargroup';
import {TooltipModule} from 'primeng/tooltip';
const PrimeNGComponents = [
  AccordionModule,
  CalendarModule,ButtonModule,
  AvatarModule,
  AvatarGroupModule,
  TooltipModule
]
@NgModule({
   
  imports: [PrimeNGComponents],
  exports:[PrimeNGComponents]
})
export class PrimeNgModule { }
