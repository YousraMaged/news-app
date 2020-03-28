import { Component, Input } from '@angular/core';
import { NewsItem } from '../../models/news-item';

@Component({
  selector: 'app-trending-news-component',
  templateUrl: './trending-news-component.component.html',
  styleUrls: ['./trending-news-component.component.scss']
})
export class TrendingNewsComponent {

  @Input() news: NewsItem;
  @Input() isLoading: boolean;
  public placeholders: Array<number> = Array(8).fill(1);

}
