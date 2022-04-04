import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons/faBars';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons/faCartShopping';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavBarComponent implements OnInit {
  faBars = faBars;
  faCartShopping = faCartShopping;

  isOpen = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  toggle(): void {
    this.isOpen = !this.isOpen;
  }

  close() {
    this.isOpen = false;
  }
}
