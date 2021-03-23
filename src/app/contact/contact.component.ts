import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  inputs = new FormGroup({
    firstName: new FormControl("", [Validators.required, Validators.minLength(5)]),
    lastName: new FormControl("", Validators.required),
    email: new FormControl("", Validators.required)
  })
  constructor() { }

  onSubmit() {
    if (this.inputs.valid) {
      let a = this.inputs.value;
      console.table(a);
    }
  }

  ngOnInit(): void {
  }

}
