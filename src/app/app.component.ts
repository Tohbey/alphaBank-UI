import { Component } from '@angular/core';
import { faCommentAlt } from '@fortawesome/free-regular-svg-icons';
import { faBuilding } from '@fortawesome/free-regular-svg-icons';
import {
  faArrowLeft,
  faArrowRight,
  faStar,
  faBriefcase,
  faUniversity
} from '@fortawesome/free-solid-svg-icons';
import {
  faFacebookF,
  faTwitter,
  faLinkedinIn,
  faInstagram
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  financial = faUniversity;
  briefCase = faBriefcase;
  comment = faCommentAlt;
  building = faBuilding;
  star = faStar;
  arrowLeft = faArrowLeft;
  arrowRight = faArrowRight;
  facebook = faFacebookF;
  twitter = faTwitter;
  linkedin = faLinkedinIn;
  instagram = faInstagram;


  title = 'alphaBank';
}
