import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { HomeModule } from './home/home.module';
import { MoviesModule } from './movies/movies.module';
import { ScrollService } from './shared/services/scroll.service';
import { TvShowModule } from './tv-show/tv-show.module';
import{ BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { PeopleModule } from './people/people.module';
import { SearchModule } from './search/search.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoadingInterceptor } from './interceptors/loading.interceptor';
import { NgxSpinnerModule } from 'ngx-spinner';
import { GenresModule } from './genres/genres.module';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HomeModule,
    MoviesModule,
    TvShowModule,
    BrowserAnimationsModule,
    PeopleModule,
    SearchModule,
    GenresModule,
    NgxSpinnerModule

  ],
  providers: [ScrollService, 
  {provide:HTTP_INTERCEPTORS,
    useClass:LoadingInterceptor,
  multi:true},],
  bootstrap: [AppComponent]
})
export class AppModule { }
