import { Component, OnInit } from '@angular/core';
import { Track } from 'src/app/_models/track';
import { TrackService } from 'src/app/_services/track.service';
import { environment } from 'src/environments/environment';
import { StringFormatService } from 'src/app/_services/string-format.service';

@Component({
  selector: 'app-track-list',
  templateUrl: './track-list.component.html',
  styleUrls: ['./track-list.component.css']
})
export class TrackListComponent implements OnInit {

  tracks: Track[];
  s3BaseImageUrl = environment.s3Url + 'images/';

  constructor(private trackService: TrackService, private stringFormatService: StringFormatService) { }

  ngOnInit() {
    this.trackService.loadTrackList();
    this.trackService.getAllTracks().subscribe(tracks => {
      this.tracks = tracks;
      this.tracks.forEach(t => {
        t.artistNames = this.stringFormatService.getArtistNames(t.artists.map(x => x.name));
      });
    });
  }

  onPlayAudio(id: number) {
    this.trackService.playAudioInFooter(id);
  }

}
