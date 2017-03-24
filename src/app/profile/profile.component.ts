import { Component, OnInit, Input } from '@angular/core';

import { Profile } from './profile';
import { Skill } from '../skills/skill';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  @Input()
  profile:Profile;
  @Input()
  skills:Skill[];

  ngOnInit() {
  }

}
