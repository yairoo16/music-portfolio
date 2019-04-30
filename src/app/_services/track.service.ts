import { Injectable, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Track } from '../_models/track';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrackService {
  baseUrl = environment.apiUrl + 'tracks/';

  private trackListStore = new BehaviorSubject<Track[]>(null);
  tracklist = this.trackListStore.asObservable();

  @Output() newTrackSelected: EventEmitter<Track> = new EventEmitter();

  // private selectedTrackSource = new BehaviorSubject<Track>(null);
  // selectedTrack = this.selectedTrackSource.asObservable();

  constructor(private http: HttpClient) { }

  loadTrackList() {
    this.http.get<Track[]>(this.baseUrl).subscribe(tracks => {
      this.trackListStore.next(tracks);
    });
  }

  getAllTracks() {
      return this.http.get<Track[]>(this.baseUrl);
  }

  addTrack(track: Track) {
    return this.http.post(this.baseUrl, track);
  }

  playAudioInFooter(id: number) {
    this.tracklist.subscribe(tracks => {
      const track = tracks.find(t => t.id === id);
      this.newTrackSelected.emit(track);
    });
  }
}
