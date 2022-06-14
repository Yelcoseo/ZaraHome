import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public headerLogo = 'https://static.zarahome.net/8/static4' +
    '/itxwebstandard/images/logos/logo.svg?20210908155158';

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  public navigateHome() {
    this.router.navigate(['home']);
  }
}
