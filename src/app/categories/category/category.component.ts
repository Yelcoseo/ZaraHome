import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as productos from 'src/assets/productos.json';
import { ProductsWithPrices } from './products.interface';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  public productList = productos;
  public productsWithPrices: ProductsWithPrices[];
  public maxPrice: Number;
  public minPrice: Number;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    this.productsWithPrices = this.getProductsPrices();
  }

  navigateToProduct(id: number, name: string) {
    const lowerCaseName = name.replace(/ /g, "-").toLocaleLowerCase();
    this.router.navigate([lowerCaseName + "/" + id]);
  }

  getProductsPrices(): ProductsWithPrices[] {
    let productsWithPrices: ProductsWithPrices[] = this.productList.products;
    productsWithPrices.map(
      product => {
        product.colors.map(
          colors => {
            for (let item of colors.sizes) {
              const priceToNumber = Number(item.price) / 100;
              if (!product.maxPrice && !product.minPrice) {
                product.maxPrice = priceToNumber;
                product.minPrice = priceToNumber;
              } else if (product.maxPrice !== undefined && product.minPrice !== undefined) {
                product.maxPrice = priceToNumber >= product.maxPrice ?
                  priceToNumber : product.maxPrice;
                product.minPrice = priceToNumber <= product.minPrice ?
                  priceToNumber : product.minPrice;
              }
            }
          }
        )
      }
    );
    return productsWithPrices;

  }

}
