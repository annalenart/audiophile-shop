import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

interface Image {
  mobile: string;
  tablet: string;
  desktop: string;
}

interface Gallery {
  first: Image;
  second: Image;
  third: Image;
}

interface Product {
  slug: string;
  name: string;
  image: Image;
}

interface IncludedItem {
  quantity: number;
  item: string;
}

// interface CategoryProduct {
//   category: string;
//   categoryImage: Image;
// }

export interface Category {
  categoryName: string;
  categoryLogo: string;
}

interface FullProduct extends Product {
  id: number;
  new: boolean;
  price: number;
  description: string;
  features: string;
  category: string;
  categoryImage: Image;
  includes: Array<IncludedItem>;
  gallery: Gallery;
  others: Array<Product>;
}

type FullProducts = Array<FullProduct>;
// type CategoryProducts = Array<CategoryProduct>;

export type Categories = Array<Category>;

@Injectable({
  providedIn: 'root'
})
export class ProviderService {

  // categories = ['zx9-speaker', 'yx1-earphones', 'xx99-mark-one-headphones'];

  constructor(private http: HttpClient) {
  }

  // getCategories(): Observable<Category> {
  //   return this.http.get<FullProducts>(`${environment.apiUrl}/items`)
  //     .pipe(map((items: FullProducts) => items.filter(({slug}: FullProduct) => this.categories.includes(slug))
  //       .map(({category, categoryImage}: FullProduct) => ({category, categoryImage}))
  //     ));
  // }

  getCategories(): Observable<Categories> {
    return this.http.get<Categories>(`${environment.apiUrl}/categories`)
  }
}
