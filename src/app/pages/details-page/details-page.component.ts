import { Component, OnInit } from '@angular/core';

import { NewsItem } from '../../models/news-item';

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.scss']
})
export class DetailsPageComponent implements OnInit {

  public newsItem: NewsItem;
  public comments: Array<any> = [];

  ngOnInit() {
    this.newsItem = window.history.state.data.item;
    console.log(this.newsItem);
  }

  addComment(comment) {
    console.log(comment);
    this.comments.push(comment);
  }

}
