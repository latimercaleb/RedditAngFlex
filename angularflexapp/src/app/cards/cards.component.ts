import { Component, Input, OnInit } from '@angular/core';
import { TopData } from '../data.model';
@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  @Input() cardInfo: TopData;
  showDesktop: boolean;
  constructor() { }

  ngOnInit() {
    if(window.screen.width < 760){
      this.showDesktop = false;
    } else{
      this.showDesktop = true;
    }
  }

}