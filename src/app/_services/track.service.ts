import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Track } from '../_models/track';


@Injectable({
  providedIn: 'root'
})
export class TrackService {
  baseUrl = environment.apiUrl + 'tracks/';

  constructor(private http: HttpClient) { }

  getAllTracks() {
      return this.http.get<Track[]>(this.baseUrl);
  }

  addTrack(track: Track) {
    return this.http.post(this.baseUrl, track);
  }
}
