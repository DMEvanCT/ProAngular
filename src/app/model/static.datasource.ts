import {Injectable} from '@angular/core';
import { Product} from './product.model';
import {Observable, from} from 'rxjs';


@Injectable
export class StaticDataSource {
  private products: Product[] = [
    new Product(1, "Product 1", "Catagory 1", "Product 1 (catagory 1)", 100),
    new Product(2, "Product 2", "Catagory 1", "Product 2 (catagory 1)", 100),
    new Product(3, "Product 3", "Catagory 1", "Product 3 (catagory 1)", 100),
    new Product(4, "Product 4", "Catagory 1", "Product 4 (catagory 1)", 100),
    new Product(5, "Product 5", "Catagory 1", "Product 5 (catagory 1)", 100),
    new Product(6, "Product 6", "Catagory 2", "Product 6 (catagory 2)", 100),
    new Product(7, "Product 7", "Catagory 2", "Product 7 (catagory 2)", 100),
    new Product(8, "Product 8", "Catagory 2", "Product 8 (catagory 2)", 100),
    new Product(9, "Product 9", "Catagory 2", "Product 9 (catagory 2)", 100),
    new Product(10, "Product 9", "Catagory 2", "Product 10 (catagory 2)", 100),
    new Product(11, "Product 11", "Catagory 3", "Product 10 (catagory 3)", 100),
    new Product(12, "Product 12", "Catagory 3", "Product 12 (catagory 3)", 100),
    new Product(13, "Product 13", "Catagory 3", "Product 13 (catagory 3)", 100),
    new Product(14, "Product 14", "Catagory 3", "Product 14 (catagory 3)", 100),
    new Product(15, "Product 15", "Catagory 3", "Product 15 (catagory 3)", 100),
  ];

  // @ts-ignore
  getProducts(): Observable<Product[]> {
    return from([this.products]);
  }
}
