
// This is the social presence component

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  constructor() { }
  contactNumber: any;
  ngOnInit() {
    this.contactNumber = "(+61) 434 266 986";
  }

}
