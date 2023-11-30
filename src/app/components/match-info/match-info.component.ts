import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { matchesTab } from '../../Data/Nabil';
@Component({
  selector: 'app-match-info',
  templateUrl: './match-info.component.html',
  styleUrls: ['./match-info.component.css']
})
export class MatchInfoComponent implements OnInit {
  id: any;
  matches: any = matchesTab;
  findedMatch: any;
  constructor(private activateRouter: ActivatedRoute) {
    this.id = this.activateRouter.snapshot.paramMap.get("id");
    for (let i = 0; i < this.matches.length; i++) {
      if (this.id == this.matches[i].id) {
        this.findedMatch = this.matches[i];
        break;
      }

    }
  }

  ngOnInit() {
  }

}
