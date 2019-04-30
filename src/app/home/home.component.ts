import { TrackService } from './../_services/track.service';
import { Component, OnInit } from '@angular/core';
import { Track } from '../_models/track';
import { environment } from '../../environments/environment';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  tracks: Track[];

  constructor(private trackService: TrackService) { }

  ngOnInit() {
    this.trackService.loadTrackList();
    this.trackService.getAllTracks().subscribe(tracks => {
      this.tracks = tracks;
    });
  }

}
