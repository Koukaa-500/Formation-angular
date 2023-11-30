import { Component, OnInit } from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-addplayer',
  templateUrl: './addplayer.component.html',
  styleUrls: ['./addplayer.component.css']
})
export class AddplayerComponent implements OnInit {
  player: any = { };
  playerForm: FormGroup;
  constructor() { }

  ngOnInit() {
  }
  addPlayer() { alert( 'weeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee ');}

}
