import { Component, OnInit } from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-addteam',
  templateUrl: './addteam.component.html',
  styleUrls: ['./addteam.component.css']
})
export class AddteamComponent implements OnInit {
teamForm: FormGroup;
team: any = { };
  constructor() { }

  ngOnInit() {
  }
    addTeam() {
    console.log( 'here team' , this.team);
    }
}
