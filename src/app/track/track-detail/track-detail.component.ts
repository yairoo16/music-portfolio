import { Component, OnInit } from '@angular/core';
import { Track } from 'src/app/_models/track';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { TrackService } from 'src/app/_services/track.service';

@Component({
  selector: 'app-track-detail',
  templateUrl: './track-detail.component.html',
  styleUrls: ['./track-detail.component.css']
})
export class TrackDetailComponent implements OnInit {

  track: Track;
  s3BaseImageUrl = environment.s3Url + 'images/';

  constructor(private route: ActivatedRoute, private trackService: TrackService) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.track = data.track;
    });
  }

  onPlayAudio(id: number) {
    this.trackService.playAudioInFooter(id);
  }

}
