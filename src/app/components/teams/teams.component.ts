import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {
teams = [
  {teamName:"RMD",teamStadium:"campNow",teamOwner:"abc"},
  {teamName:"FNC",teamStadium:"Rekkles",teamOwner:"EFG"},
  {teamName:"G2",teamStadium:"Caps",teamOwner:"KLM"}
]

  constructor() {}

  ngOnInit() {
  }

}
