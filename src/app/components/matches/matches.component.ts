import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
})
export class MatchesComponent implements OnInit {
  title :string="All Matches";
matches = [ {teamOne:"FSB", teamTwo:"RMD", scoreOne: 1 , scoreTwo: 3 },
 {teamOne:"EST", teamTwo:"CA",scoreOne: 0 , scoreTwo: 2}, {teamOne:"ESS", teamTwo:"CSS",scoreOne: 0 , scoreTwo: 0},
 {teamOne:"MCY", teamTwo:"MUN",scoreOne: 3 , scoreTwo: 0}] ;
  constructor() { }

  ngOnInit() {
  }

}
