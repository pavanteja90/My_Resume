
// This is the about me component

import { Component, OnInit } from '@angular/core';
import * as fullPage from "../../assets/fullpage.js";
declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  myFullPage: any;
  constructor() { }

  ngOnInit() {
    this.myFullPage = fullPage('#about-page', {
        sectionsColor: ['brown', '#444', '#4BBFC3', '#1bbc9b'],
        lazyLoad: true,        
        navigation: true,
        navigationPosition: 'left',
        navigationTooltips: ['Hell<del>o</del>.', 'W<del>o</del>rk.', 'G<del>o</del>al.', 'Stay in t<del>o</del>uch.']
    });
  }

  ngOnDestroy() {
    this.myFullPage.destroy(true);
  }
}

// '#1bbc9b', '#4BBFC3', '#7BAABE', 'whitesmoke', '#ccddff'