import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  form = new FormGroup({
    name: new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.required,Validators.email]),
    password: new FormControl('',[Validators.required]),
    ripetiPassword:new FormControl('',[Validators.required]),
    accetto: new FormControl('',[Validators.requiredTrue])

  })

  constructor() { }

  ngOnInit(): void {
  }


 onSubmit(){
    console.log(this.form.value);
 }
}
