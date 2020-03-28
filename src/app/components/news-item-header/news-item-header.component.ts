import { Component, OnInit, Input } from '@angular/core';
import { NewsItem } from '../../models/news-item';
import { HelperService } from '../../services/helper.service';

@Component({
  selector: 'app-news-item-header',
  templateUrl: './news-item-header.component.html',
  styleUrls: ['./news-item-header.component.scss']
})
export class NewsItemHeaderComponent implements OnInit {

  @Input() newsItem: NewsItem;

  constructor(public helper: HelperService) { }

  ngOnInit() {
    console.log(this.newsItem, 'header');
  }

}
