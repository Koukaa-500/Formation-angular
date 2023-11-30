import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {
players = [
    {name: 'Nabil', age: 21, number: 21},
  {name: 'Ala', age: 23, number: 23},
  {name: 'Mouhanned' , age: 19, number: 19},
  {name: 'Amen', age: 19, number: 20 }
];
  constructor() { }

  ngOnInit() {
  }

}
