import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-particle',
  templateUrl: './particle.component.html',
  styleUrls: ['./particle.component.scss']
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
      'へ',
      'と',
      'も',
      'に',
      'で',
      'から',
      'まで',
      'その他 (Extra)'
    ];
  }
  
  public selectContent(index) {
    this.contentShow = index;
  }

}
