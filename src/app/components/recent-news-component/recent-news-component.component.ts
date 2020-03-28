import { Component, Input } from '@angular/core';
import { NewsItem } from '../../models/news-item';


@Component({
  selector: 'app-recent-news-component',
  templateUrl: './recent-news-component.component.html',
  styleUrls: ['./recent-news-component.component.scss']
})
export class RecentNewsComponent {

  @Input() news: NewsItem;
  @Input() isLoading: boolean;
  public placeholders: Array<number> = Array(3).fill(1);

}
