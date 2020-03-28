import { Component, Input } from '@angular/core';
import { NewsItem } from '../../models/news-item';

@Component({
  selector: 'app-news-component',
  templateUrl: './news-component.component.html',
  styleUrls: ['./news-component.component.scss']
})
export class NewsComponent {

  @Input() news: NewsItem;
  @Input() isLoading: boolean;
  public placeholders: Array<number> = Array(3).fill(1);

}
