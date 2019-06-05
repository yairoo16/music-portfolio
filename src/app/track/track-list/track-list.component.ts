import { Component, OnInit } from '@angular/core';
import { Track } from 'src/app/_models/track';
import { TrackService } from 'src/app/_services/track.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-track-list',
  templateUrl: './track-list.component.html',
  styleUrls: ['./track-list.component.css']
})
export class TrackListComponent implements OnInit {

  tracks: Track[];
  s3BaseImageUrl = environment.s3Url + 'images/';

  constructor(private trackService: TrackService) { }

  ngOnInit() {
    this.trackService.loadTrackList();
    this.trackService.getAllTracks().subscribe(tracks => {
      this.tracks = tracks;
    });
  }

  onPlayAudio(id: number) {
    this.trackService.playAudioInFooter(id);
  }

}
