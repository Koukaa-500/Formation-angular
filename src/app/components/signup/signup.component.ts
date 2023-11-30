import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  // Form ID
signupForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() { this.signupForm = this.fb.group({
    email: ['', [Validators.required , Validators.email ]],
    password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(16)]],
    repeatpwd: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(16)]] } , ); }
  signup() { console.log('heyyy there', this.signupForm.value); }

}
