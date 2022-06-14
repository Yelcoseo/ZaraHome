import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as productos from 'src/assets/productos.json';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  public productList = productos;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  navigateToProduct(id: number, name: string) {
    const lowerCaseName = name.replace(/ /g, "-").toLocaleLowerCase();
    this.router.navigate([lowerCaseName + "/" + id]);
  }

}
