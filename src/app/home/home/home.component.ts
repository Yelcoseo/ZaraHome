import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public image = 'https://static.zarahome.net/8/static4/itxwebstandard' +
    '/dto_imagen/home/slider/desktop/similarities.jpg?20220509020507';
  public idCategory: number = 1;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  public navigateCategory() {
    this.router.navigate(['fundas-nordicas-c/' + this.idCategory.toString()]);
  }
}
