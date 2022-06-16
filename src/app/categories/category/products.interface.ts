export interface ProductsWithPrices {
  id: number;
  image: string;
  name: string;
  minPrice?: number;
  maxPrice?: number;
  colors: Colors[];
}

export interface Colors {
  id: string;
  image: string;
  name: string;
  sizes: Sizes[];
}

export interface Sizes {
  description: string;
  name: string;
  price: string;
  sku: any;
  visibilityValue: string;

}
