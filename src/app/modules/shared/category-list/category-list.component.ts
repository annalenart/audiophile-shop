import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Categories, ProviderService } from '../provider.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {
  categories$: Observable<Categories>;

  constructor(private providerService: ProviderService) {
  }

  ngOnInit(): void {
    this.categories$ = this.providerService.getCategories();
  }

}
