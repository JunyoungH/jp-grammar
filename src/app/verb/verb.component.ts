import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-verb',
  templateUrl: './verb.component.html',
  styleUrls: ['./verb.component.scss'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [   // :enter is alias to 'void => *'
        style({opacity:0}),
        animate(500, style({opacity:1})) 
      ])
    ])
  ]
})
export class VerbComponent implements OnInit {
  
  contentShow:number = 0;
  
  constructor() { }

  ngOnInit() {
  }

  public selectContent(index) {
    this.contentShow = index;
  }

}
