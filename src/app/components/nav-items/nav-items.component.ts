import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NAV_ITEMS } from '../../modules/shared/utils';

@Component({
  selector: 'app-nav-items',
  templateUrl: './nav-items.component.html',
  styleUrls: ['./nav-items.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavItemsComponent implements OnInit {
  @Output() readonly itemClicked = new EventEmitter<void>();
  navItems = NAV_ITEMS;

  constructor() {
  }

  ngOnInit(): void {
  }

  onItemClicked() {
    this.itemClicked.emit();
  }
}
