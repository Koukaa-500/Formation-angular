import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
import { matchesTab } from '../../Data/Nabil';
@Component({
  selector: 'app-matchs-table',
  templateUrl: './matchs-table.component.html',
  styleUrls: ['./matchs-table.component.css']
})
export class MatchsTableComponent implements OnInit {
// matches=[
//   {id:1, scoreOne:2 , scoreTwo:0 , teamOne:"RMD",teamTwo:"FCB"},
//   {id:2, scoreOne:1 , scoreTwo:1 , teamOne:"EST",teamTwo:"CA"},
//   {id:3, scoreOne:2 , scoreTwo:4 , teamOne:"MCI",teamTwo:"MUN"},
//   {id:4, scoreOne:0 , scoreTwo:0 , teamOne:"INT",teamTwo:"BVD"}
// ]
matches = matchesTab;
  constructor(private router:Router) {
    
   }

  ngOnInit() {
  }
goTo(x){
  this.router.navigate([`match-info/${x}`]);
}
}
