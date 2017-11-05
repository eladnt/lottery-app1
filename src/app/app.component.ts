import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'hello there';
  acolor= 'green';
     list: number[] = [4, 3, 2];
   min: number;
   gameBall: number [] ;
       // tslint:disable-next-line:use-life-cycle-interface
     //  sortedlist: string[];
  pickBalls()  {
    const conuter = 0;
    const aBall = Math.floor(Math.random() * 5) + 1;
 for (let i = 0; 3 > this.gameBall.length  ; i++)
    // tslint:disable-next-line:one-line
    {if (!this.gameBall.includes(aBall)) {
    this.gameBall.push(aBall); }
   }
  }
       wasChoosen(i: number)  {
   return this.list.includes(i);
 }
  switchColor(i: number)  {
if (!this.wasChoosen(i))
 // tslint:disable-next-line:one-line
 {
   this.list.push(i);
  } else {
       this.list.splice(this.list.indexOf(i), 1);
  }


   // this.min = this.list.sort()[0];
  }}
