import { TrackService } from '../_services/track.service';
import { Injectable } from '@angular/core';
import { Track } from '../_models/track';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
// import { AlertifyService } from '../_service/alertify.service';
import { catchError } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
  })
export class TrackDetailResolver implements Resolve<Track> {

    constructor(private trackService: TrackService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

        if (route.params.id) {
            return this.trackService.getTrack(route.params.id);
          } else {
            return null;
          }
    }
}
