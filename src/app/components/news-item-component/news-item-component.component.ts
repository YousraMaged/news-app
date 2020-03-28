import { Component, Input } from '@angular/core';
import { HelperService } from '../../services/helper.service';
import { NewsItem } from '../../models/news-item';
import { Router } from '@angular/router';

@Component({
  selector: 'app-news-item-component',
  templateUrl: './news-item-component.component.html',
  styleUrls: ['./news-item-component.component.scss']
})
export class NewsItemComponent {

  @Input() hideImage: boolean;
  @Input() newsItem: NewsItem;
  @Input() type: string;

  constructor(public helper: HelperService, private router: Router) {}

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
