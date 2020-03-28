import { Component, OnInit, Input } from '@angular/core';
import { NewsItem } from '../../models/news-item';

@Component({
  selector: 'app-popular-news-component',
  templateUrl: './popular-news-component.component.html',
  styleUrls: ['./popular-news-component.component.scss']
})
export class PopularNewsComponent {

  @Input() news: NewsItem;
  @Input() isLoading: boolean;
  public placeholders: Array<number> = Array(3).fill(1);

}
