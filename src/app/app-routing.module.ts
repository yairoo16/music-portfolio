import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RequestComponent } from './request/request.component';
import { TrackListComponent } from './track/track-list/track-list.component';
import { TrackDetailComponent } from './track/track-detail/track-detail.component';
import { TrackDetailResolver } from './_resolvers/track-detail.resolver';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent},
  { path: 'tracks', component: TrackListComponent},
  { path: 'tracks/:id', component: TrackDetailComponent, resolve: {
    track: TrackDetailResolver
  }},
  { path: 'request', component: RequestComponent},
  { path: '**', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
