import { Component, OnInit } from '@angular/core';
// import { fstat } from 'node:fs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  counter = 0;
  companyName: string;



  constructor() { 
    this.companyName = "Cars4sale";
   }




count(){
  this.counter = this.counter + 10 ;
  // if (this.counter >= 200){ document.getElementbyId("x").innertext = "VIP"} this.vip = true;  
}

 


  ngOnInit(): void {
  }

}

