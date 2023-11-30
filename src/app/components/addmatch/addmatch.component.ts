import { Component, OnInit } from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-addmatch',
  templateUrl: './addmatch.component.html',
  styleUrls: ['./addmatch.component.css']
})
export class AddmatchComponent implements OnInit {
match: any = {};
matchForm: FormGroup;
  constructor() { }

  ngOnInit() {
  }
  addMatch() { alert( 'weeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee '); }

}
