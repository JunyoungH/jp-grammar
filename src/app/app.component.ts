import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  letterType:number = 0;

  @ViewChild("letteSheetComponent", {static:true})
  letterSheetComponent:TemplateRef<any>;

  constructor(private route:Router, private matDialog:MatDialog) {

  }

  ngOnInit() {}

  public openLetterSheet(type) {
    this.letterType = type;
    this.matDialog.open(this.letterSheetComponent)
  }

}
