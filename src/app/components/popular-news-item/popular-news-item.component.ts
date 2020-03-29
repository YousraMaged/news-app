import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { NewsItem } from '../../models/news-item';

@Component({
  selector: 'app-popular-news-item',
  templateUrl: './popular-news-item.component.html',
  styleUrls: ['./popular-news-item.component.scss']
})
export class PopularNewsItemComponent {

  @Input() newsItem: NewsItem;
  @Input() index: number;

  constructor(private router: Router) { }

  goToDetails() {
    this.router.navigate([`/details/${this.newsItem.title}`], {
      state: {
        data: {
          item: this.newsItem
        }
      }
    });
  }

}
