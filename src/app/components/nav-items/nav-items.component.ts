import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-nav-items',
  templateUrl: './nav-items.component.html',
  styleUrls: ['./nav-items.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavItemsComponent implements OnInit {
  @Output() readonly itemClicked = new EventEmitter<void>();

  navItems = [
    {
      name: 'home',
      path: 'home'
    },
    {
      name: 'headphones',
      path: 'categories/headphones'
    },
    {
      name: 'speakers',
      path: 'categories/speakers'
    },
    {
      name: 'earphones',
      path: 'categories/earphones'
    }
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

  onItemClicked() {
    this.itemClicked.emit();
  }
}
