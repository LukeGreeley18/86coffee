import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigateHome() {
    console.log('navigate home');
    this.router.navigate(['/home']);
  }

  navigateMenu() {
    console.log('navigate menu');
    this.router.navigate(['/menu']);
  }

  navigateShops() {
    console.log('navigate shops');
    this.router.navigate(['/shops']);
  }

  navigateCoffee() {
    console.log('navigate coffee');
    window.open("https://pneumacoffee.com/", "_blank");
  }

}
