import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { NewsItem } from '../../models/news-item';

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.scss']
})
export class DetailsPageComponent implements OnInit {

  public newsItem: NewsItem;
  public comments: Array<any> = [];

  constructor(private router: Router) {}

  ngOnInit() {
    if (window.history.state.data) {
      this.newsItem = window.history.state.data.item;
    } else {
      this.router.navigate(['/']);

    }
  }

  addComment(comment) {
    this.comments.push(comment);
  }

}
