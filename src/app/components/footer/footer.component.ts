import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons/faFacebookSquare';
import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter';
import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent implements OnInit {
  faFacebookSquare = faFacebookSquare;
  faTwitter = faTwitter;
  faInstagram = faInstagram;
  iconStyles = {
    color: 'white',
    height: '20px'
  };

  constructor() {
  }

  ngOnInit(): void {
  }

}
