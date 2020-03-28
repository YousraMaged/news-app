import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

import { NewsService } from '../../services/news.service';
import { LoaderService } from '../../services/loader.service';
import { dateFormat, timeNow } from '../../constants';
import { NewsItem } from '../../models/news-item';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  public headlines: Array<NewsItem> = [];
  public editorPicks: Array<NewsItem> = [];
  public popularNews: Array<NewsItem> = [];
  public trendingNews: Array<NewsItem> = [];
  public recentNews: Array<NewsItem> = [];
  public isLoading = this.loaderService.isLoading;

  constructor(private newsService: NewsService, private loaderService: LoaderService) { }

  ngOnInit() {
    this.getHeadlines();
    this.getRecentNews();
    this.getPopularNews();
  }

  getHeadlines() {
    this.loaderService.change('headlines', true);
    this.newsService.getHeadlines().subscribe(res => {
      this.headlines = res.articles;
      this.loaderService.change('headlines', false);
    });
  }

  getPopularNews() {
    const time = moment().subtract(3, 'd');
    const formattedTime = time.format(dateFormat);

    this.loaderService.change('trending', true);
    this.loaderService.change('popular', true);

    this.newsService.getNews('popularity', timeNow, formattedTime, '20').subscribe(res => {
      this.trendingNews = res.articles.slice(0, 12);
      this.popularNews = res.articles.slice(13, 18);
      this.loaderService.change('trending', false);
      this.loaderService.change('popular', false);
    });
  }

  getRecentNews() {
    const time = moment().subtract(12, 'h');
    const formattedTime = time.format(dateFormat);

    this.loaderService.change('editorPicks', true);
    this.loaderService.change('recent', true);

    this.newsService.getNews('publishedAt', timeNow, formattedTime, '10').subscribe((res) => {
      this.editorPicks = res.articles.slice(0, 3);
      this.recentNews = res.articles.slice(4, 7);
      this.loaderService.change('editorPicks', false);
      this.loaderService.change('recent', false);
    });
  }

}
