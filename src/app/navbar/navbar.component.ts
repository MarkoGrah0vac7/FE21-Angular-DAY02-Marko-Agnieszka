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
  // if (this.counter >= 200) this.vip = true;  
}




  ngOnInit(): void {
  }

}



// <div class="btn" [class.active]="counter > 200">
//   <ng-template [ngIf]="counter > 200" [ngIfElse]="none">
//           <p> VIP </p>
//   </ng-template>
//   <ng-template #none>
//   </ng-template>
// </div>




// cars = [{
//   type: Oldtimer,
//   price: 85
// },{
//   type: Sport,
//   price: 80
// }, {
//   type: Sport,
//   price: 80
// },{
//   type: Sport,
//   price: 80
// }, {
//   type: Sport,
//   price: 80
// }, {
//   type: Sport,
//   price: 80
// }];


// <div *ngFor="let car of cars">
//   <p>{{car.type}}</p>
//   <p>{{car.price}}</p>
// </div>