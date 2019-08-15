import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-exercice-1',
  templateUrl: './exercice-1.component.html'
})
export class Exercice1Component implements OnInit {

   @HostListener('window:keydown', ['$event']) windowClick($event) {
     console.log($event);
   }

  constructor() {
  }

  ngOnInit() {
  }

}
