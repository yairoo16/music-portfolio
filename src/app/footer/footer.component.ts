import { Component, OnInit, Input } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Track } from '../_models/track';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  @Input() track: Track;
  s3BaseMusicUrl = environment.s3Url + 'music/';

  constructor() { }

  ngOnInit() {
  }

}
