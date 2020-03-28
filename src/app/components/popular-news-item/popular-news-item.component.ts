import { Component, Input } from '@angular/core';
import { NewsItem } from '../../models/news-item';

@Component({
  selector: 'app-popular-news-item',
  templateUrl: './popular-news-item.component.html',
  styleUrls: ['./popular-news-item.component.scss']
})
export class PopularNewsItemComponent {

  @Input() newsItem: NewsItem;
  @Input() index: number;

}
