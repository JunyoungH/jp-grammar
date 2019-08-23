import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-adverb',
  templateUrl: './adverb.component.html',
  styleUrls: ['./adverb.component.scss'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [   // :enter is alias to 'void => *'
        style({opacity:0}),
        animate(500, style({opacity:1})) 
      ])
    ])
  ]
})
export class AdverbComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
