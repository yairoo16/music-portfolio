import { Component, OnInit, Input } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Track } from '../_models/track';
import { TrackService } from '../_services/track.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  @Input() track: Track;
  tracks: Track[];
  currentTrackPath: string;
  s3BaseMusicUrl = environment.s3Url + 'music/';

  constructor(private trackService: TrackService) { }

  ngOnInit() {
    this.trackService.getAllTracks().subscribe(tracks => {
      // initialize player with first track in list
      this.currentTrackPath = tracks[0].music;
    });
  }

}
