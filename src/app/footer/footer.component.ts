import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Track } from '../_models/track';
import { TrackService } from '../_services/track.service';
import { PlayerIndex } from '@angular/core/src/render3/interfaces/player';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  tracks: Track[];
  initialTrackPath: string;
  currentTrackPath: string;
  s3BaseMusicUrl = environment.s3Url + 'music/';

  constructor(private trackService: TrackService) { }

  ngOnInit() {
    this.trackService.getAllTracks().subscribe(tracks => {
      // initialize player with first track in list
      this.initialTrackPath = tracks[0].music;
    });

    this.trackService.newTrackSelected.subscribe(track => {
      this.currentTrackPath = track.music;
      const audio = document.getElementById('audio') as HTMLAudioElement;
      audio.src = this.s3BaseMusicUrl + this.currentTrackPath;
      audio.pause();
      audio.load();
      audio.play();
    });
  }

}
