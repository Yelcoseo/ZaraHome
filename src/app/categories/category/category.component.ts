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
    console.log('products', this.productList.products);
    // this.productList.products.map(
    //   (product) => {
    //     let maxPrice = 0;
    //     let minPrice = 999999;
    //     product.colors.forEach(color => {
    //       color.sizes.forEach(size => {
    //         if (Number(size.price) > maxPrice) {
    //           maxPrice = Number(size.price);
    //         }
    //         if (Number(size.price) < minPrice) {
    //           minPrice = Number(size.price);
    //         }
    //         console.log('maxPrice', maxPrice);
    //         console.log('minPrice', minPrice);

    //       })
    //     })
    //   }
    // )
  }

  navigateToProduct(id: number, name: string) {
    const lowerCaseName = name.replace(/ /g, "-").toLocaleLowerCase();
    this.router.navigate([lowerCaseName + "/" + id]);
  }

}
