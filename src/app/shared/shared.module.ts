import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { RouterModule} from '@angular/router';
import { CastingComponent } from './components/casting/casting.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { RemoveNullPersonPipe } from './pipes/remove-null-person.pipe';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    NavBarComponent,
    CastingComponent,
    RemoveNullPersonPipe,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    CarouselModule,
    FormsModule
  ],
  exports:[
    NavBarComponent,
    CastingComponent,
    FooterComponent
  ]
})
export class SharedModule { }
