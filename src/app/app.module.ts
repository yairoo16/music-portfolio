import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { RequestComponent } from './request/request.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TrackCardComponent } from './track/track-card/track-card.component';
import { AudioPlayerComponent } from './audio-player/audio-player.component';
import { TrackListComponent } from './track/track-list/track-list.component';
import { TrackDetailComponent } from './track/track-detail/track-detail.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    RequestComponent,
    TrackCardComponent,
    AudioPlayerComponent,
    TrackListComponent,
    TrackDetailComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
