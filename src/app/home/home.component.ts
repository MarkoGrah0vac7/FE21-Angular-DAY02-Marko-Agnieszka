import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  upToYou = new FormGroup({
    type: new FormControl("", [Validators.required, Validators.minLength(5)]),
    price: new FormControl("", Validators.required),
    img: new FormControl("", Validators.required)
  })
  
  constructor() {
  }
  

// an array of objects with cars and show them on the main page
cars = [{
    type: "Oldtimer",
    price: 95,
    img: "https://cdn.pixabay.com/photo/2016/02/13/13/11/oldtimer-1197800__340.jpg"
  },{
    type: "Sport",
    price: 80,
    img: "https://cdn.pixabay.com/photo/2016/04/01/12/16/car-1300629__340.png"
  }, {
    type: "Sport",
    price: 80,
    img: "https://cdn.pixabay.com/photo/2012/05/29/00/43/car-49278__340.jpg"
  },{
    type: "Sport",
    price: 80,
    img: "https://cdn.pixabay.com/photo/2015/01/19/13/51/car-604019__340.jpg"
  }, {
    type: "Sport",
    price: 80,
    img: "https://cdn.pixabay.com/photo/2016/04/01/12/16/car-1300629__340.png"
  }, {
    type: "Sport",
    price: 80,
    img: "https://cdn.pixabay.com/photo/2016/09/11/16/47/car-1661767__340.jpg"
  }];
  


  onSubmit() {
    if (this.upToYou.valid) {
      let a = this.upToYou.value;
      this.cars.push(a);
    }
  }


  ngOnInit(): void {
  }
}

