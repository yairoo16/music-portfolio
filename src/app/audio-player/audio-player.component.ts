import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Track } from '../_models/track';
import { TrackService } from '../_services/track.service';

@Component({
  selector: 'app-audio-player',
  templateUrl: './audio-player.component.html',
  styleUrls: ['./audio-player.component.css']
})
export class AudioPlayerComponent implements OnInit {

  tracks: Track[];
  artistsNames: string[];
  artistsString = '';
  currentTrack: Track;
  s3BaseMusicUrl = environment.s3Url + 'music/';

  constructor(private trackService: TrackService) { }

  ngOnInit() {
    const audio = document.getElementById('audio') as HTMLAudioElement;

    this.trackService.getAllTracks().subscribe(tracks => {
      // initialize player with first track in list
      this.currentTrack = tracks[0];
      this.artistsNames = this.currentTrack.artists.map(x => x.name);
      this.artistsNames.forEach(name => {
        this.artistsString += name + ', ';
      });
      audio.src = this.s3BaseMusicUrl + this.currentTrack.music;
    });

    this.trackService.newTrackSelected.subscribe(track => {
      this.currentTrack = track;
      this.artistsNames = this.currentTrack.artists.map(x => x.name);
      this.artistsString = this.artistsNames.toString(); // .replace(/,\s*$/, '');
      // const audio = document.getElementById('audio') as HTMLAudioElement;
      audio.src = this.s3BaseMusicUrl + this.currentTrack.music;
      audio.pause();
      audio.load();
      audio.play();
    });
  }
}
