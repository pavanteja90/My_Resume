
// This is the education component

import { Component, OnInit } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  title: string;
  bool1: boolean = false;
  bool2: boolean = false;
  bool3: boolean = false;
  constructor() {
    this.title = "Table";
  }

  ngOnInit() {
  }

  btnClicked(id) {

    if(parseInt(id) == 1) {
      if(this.bool1) {
        this.bool1 = true;
        document.getElementById("mit-caret-1").style.transform = "rotate(0deg)";
        document.getElementById("mit-caret-2").style.transform = "rotate(0deg)";
        document.getElementById("mit-caret-3").style.transform = "rotate(0deg)";
      }
      else {
        this.bool1 = false;
        document.getElementById("mit-caret-1").style.transform = "rotate(180deg)";
        document.getElementById("mit-caret-2").style.transform = "rotate(0deg)";
        document.getElementById("mit-caret-3").style.transform = "rotate(0deg)";
      }      
    }
    else if(parseInt(id) == 2) {
      if(this.bool2) {
        this.bool2 = true;
        document.getElementById("mit-caret-1").style.transform = "rotate(0deg)";
        document.getElementById("mit-caret-2").style.transform = "rotate(0deg)";
        document.getElementById("mit-caret-3").style.transform = "rotate(0deg)";
      }
      else {
        this.bool2 = false;
        document.getElementById("mit-caret-1").style.transform = "rotate(0deg)";
        document.getElementById("mit-caret-2").style.transform = "rotate(180deg)";
        document.getElementById("mit-caret-3").style.transform = "rotate(0deg)";
      }      
    }
    else if(parseInt(id) == 3) {
      if(this.bool3) {
        this.bool3 = true;
        document.getElementById("mit-caret-1").style.transform = "rotate(0deg)";
        document.getElementById("mit-caret-2").style.transform = "rotate(0deg)";
        document.getElementById("mit-caret-3").style.transform = "rotate(0deg)";
      }
      else {
        this.bool3 = false;
        document.getElementById("mit-caret-1").style.transform = "rotate(0deg)";
        document.getElementById("mit-caret-2").style.transform = "rotate(0deg)";
        document.getElementById("mit-caret-3").style.transform = "rotate(180deg)";
      }      
    }
  }

  btnClick() {
    let dis = document.getElementById("body-1").style.display;
    if(dis == "none") {
      document.getElementById("body-1").style.display = "block";
    }
    else {
      document.getElementById("body-1").style.display = "none";
    }
  }

}
