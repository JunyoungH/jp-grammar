import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-particle',
  templateUrl: './particle.component.html',
  styleUrls: ['./particle.component.scss'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [   // :enter is alias to 'void => *'
        style({opacity:0}),
        animate(500, style({opacity:1})) 
      ])
    ])
  ]
})
export class ParticleComponent implements OnInit {

  contents:string[] = [];
  contentShow:number = 0;

  constructor() { }

  ngOnInit() {

    this.setContent();

  }

  private setContent() {
    this.contents = [
      'は',
      'を',
      'が',
      'も',
      'と',
      'や・とか',
      'の',
      'に',
      'へ',
      'で',
      'その他 (Extra)'
    ];
  }
  
  public selectContent(index) {
    this.contentShow = index;
  }

}
