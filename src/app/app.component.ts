import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  private id: string = "#a1";
  isHidden: boolean = false;
  constructor(private router: Router){
    router.events.subscribe((val) => {
      this.routingChanged(val);
    })
  }

  ngOnInit(): void{
    $('.popover-dismiss').popover({
      trigger: 'focus'
    });
    if(localStorage.getItem("id")){
      this.navigate(localStorage.getItem("id"));
    }
    else{
      $("#a1").addClass("current-tab active");
    }
    // var prevScrollpos = window.pageYOffset;
    $("#background").scroll(() => {
      if (document.getElementById("background").scrollTop > 60) {
        document.getElementById("scrollBtn").style.display = "block";
      } else {
        document.getElementById("scrollBtn").style.display = "none";
      }
    });
    $(window).scroll(function() {
      if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
        document.getElementById("scrollBtn").style.display = "block";
      } else {
        document.getElementById("scrollBtn").style.display = "none";
      }
      // var currentScrollPos = window.pageYOffset;
      // if(localStorage.getItem("id") != "5"){
      //   if (prevScrollpos > currentScrollPos) {
      //     $("#app-footer").fadeIn("slow");
      //     $("#app-navbar").fadeIn("slow");
      //   } else {
      //     $("#app-footer").fadeOut("slow");
      //     $("#app-navbar").fadeOut("slow");
      //   }
      // }
      // prevScrollpos = currentScrollPos;
    });
  }

  ngAfterViewChecked(): void {
    //Called after every check of the component's view. Applies to components only.
    //Add 'implements AfterViewChecked' to the class.
    let height = $(".footer").height();
    $("#router-outlet").css('max-height',window.innerHeight-height);
  }
  navigate(id): void{
    if(id == 5) {
      localStorage.setItem("id", id);
      $("#app-navbar").hide();
      $("#app-navbar-name").show();
      $("#home-grid").show();
      $("#background").show();
    }
    else {
      $("#app-navbar").show();
      $("#app-navbar-name").hide();
      $("#home-grid").hide();
      $("#background").hide();
      localStorage.setItem("id" ,id);
      $(this.id).removeClass("current-tab active");
      this.id = "#a"+id.toString();
      $(this.id).addClass("current-tab active");
      // this.router.navigate([path]);
      // $('#app-navbar').on('click', function(){
      //   $('.navbar-collapse').collapse('hide');
      // });
    }
  }
  navigateTo(id) {
    document.getElementById("scrollBtn").style.display = "none";
    if(id == 5) {
      localStorage.setItem("id", id);
      $("#app-navbar").hide();
      $("#app-navbar-name").show();
      $("#home-grid").show();
      $("#background").show();
    }
    else {
      $("#app-navbar").show();
      $("#app-navbar-name").hide();
      $("#home-grid").hide();
      $("#background").hide();
      localStorage.setItem("id" ,id);
      $(this.id).removeClass("current-tab active");
      this.id = "#a"+id.toString();
      $(this.id).addClass("current-tab active");
      // this.router.navigate([path]);
      // $('#app-navbar').on('click', function(){
      //   $('.navbar-collapse').collapse('hide');
      // });
      if(parseInt(id) == 1) {
        this.router.navigate(["/about-me"]);
      }
      else if(parseInt(id) == 2) {
        this.router.navigate(["/education"]);
      }
      else if (parseInt(id) == 3) {
        this.router.navigate(["/chill-outs"]);
      }
      else if (parseInt(id) == 4) {
        this.router.navigate(["/social-presence"]);
      }
      else {
        this.router.navigate(["/"]);
      }
    }
  }

  topFunction() {
    document.getElementById("background").scrollTop = 0;
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  routingChanged(value) {
    if(value.url == "/") {
      this.navigate(5);
    }
    else if(value.url == "/about-me"){
      this.navigate(1);
    }
    else if(value.url == "/education") {
      this.navigate(2);
    }
    else if(value.url == "/chill-outs") {
      this.navigate(3);
    }
    else if(value.url == "/social-presence") {
      this.navigate(4);
    }
  }

  navbarBtnClicked() {
    
  }
}
