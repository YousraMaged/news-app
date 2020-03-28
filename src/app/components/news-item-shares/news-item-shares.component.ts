import { Component, OnInit } from '@angular/core';
import { socialMediaLinks } from '../../constants';

@Component({
  selector: 'app-news-item-shares',
  templateUrl: './news-item-shares.component.html',
  styleUrls: ['./news-item-shares.component.scss']
})
export class NewsItemSharesComponent implements OnInit {

  public socialMediaLinks: Array<object> = socialMediaLinks;

  constructor() { }

  ngOnInit() {
  }

}
