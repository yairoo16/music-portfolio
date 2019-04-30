import { Component, OnInit, Input } from '@angular/core';
import { Track } from 'src/app/_models/track';
import { environment } from 'src/environments/environment';
import { TrackService } from 'src/app/_services/track.service';

@Component({
  selector: 'app-track-card',
  templateUrl: './track-card.component.html',
  styleUrls: ['./track-card.component.css']
})
export class TrackCardComponent implements OnInit {

  @Input() track: Track;
  s3BaseImageUrl = environment.s3Url + 'images/';

  constructor(private trackService: TrackService) { }

  ngOnInit() {
  }

  onPlayAudio(id: number) {
    this.trackService.playAudioInFooter(id);
  }

}
