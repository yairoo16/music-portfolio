import { Component, OnInit, Input } from '@angular/core';
import { Track } from 'src/app/_models/track';
import { environment } from 'src/environments/environment';
import { TrackService } from 'src/app/_services/track.service';
import { StringFormatService } from 'src/app/_services/string-format.service';

@Component({
  selector: 'app-track-card',
  templateUrl: './track-card.component.html',
  styleUrls: ['./track-card.component.css']
})
export class TrackCardComponent implements OnInit {

  @Input() track: Track;
  artistNames: string;
  s3BaseImageUrl = environment.s3Url + 'images/';

  constructor(private trackService: TrackService, private stringFormatService: StringFormatService) { }

  ngOnInit() {
    this.setArtistsNames();
  }

  setArtistsNames() {
    this.track.artistNames = this.stringFormatService.getArtistNames(this.track.artists.map(x => x.name));

  }

  onPlayAudio(id: number) {
    this.trackService.playAudioInFooter(id);
  }

}
