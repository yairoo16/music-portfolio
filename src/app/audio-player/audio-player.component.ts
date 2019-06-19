import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Track } from '../_models/track';
import { TrackService } from '../_services/track.service';
import { StringFormatService } from '../_services/string-format.service';

@Component({
  selector: 'app-audio-player',
  templateUrl: './audio-player.component.html',
  styleUrls: ['./audio-player.component.css']
})
export class AudioPlayerComponent implements OnInit {

  tracks: Track[];
  currentTrack: Track;
  s3BaseImageUrl = environment.s3Url + 'images/';
  s3BaseMusicUrl = environment.s3Url + 'music/';


  constructor(private trackService: TrackService, private stringFormatService: StringFormatService) { }

  ngOnInit() {
    const audio = document.getElementById('audio') as HTMLAudioElement;

    this.trackService.getAllTracks().subscribe(tracks => {
      // initialize player with first track in list
      this.currentTrack = tracks[0];
      this.currentTrack.artistNames = this.stringFormatService.getArtistNames(this.currentTrack.artists.map(x => x.name));
      audio.src = this.s3BaseMusicUrl + this.currentTrack.music;
    });

    this.trackService.newTrackSelected.subscribe(track => {
      this.currentTrack = track;
      this.currentTrack.artistNames = this.stringFormatService.getArtistNames(this.currentTrack.artists.map(x => x.name));
      audio.src = this.s3BaseMusicUrl + this.currentTrack.music;
      audio.pause();
      audio.load();
      audio.play();
    });
  }
}
