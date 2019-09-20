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
  baseUrl:string;

  @ViewChild("letteSheetComponent", {static:true})
  letterSheetComponent:TemplateRef<any>;

  constructor(private route:Router, private matDialog:MatDialog) {}

  ngOnInit() {
    let urlSegment =  (window.location.href).split('/');
    urlSegment.splice(urlSegment.length - 1, 1);
    this.baseUrl = urlSegment.join('/');
  }

  public openLetterSheet(type) {
    this.letterType = type;
    this.matDialog.open(this.letterSheetComponent, {
      autoFocus: false
    })
  }

  public onCloseDialog() {
    this.matDialog.closeAll();
  }

  public openImage(imgName) {
    window.open(`${this.baseUrl}/assets/images/${imgName}3.gif`, '_blank');
  }
}
  