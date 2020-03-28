import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  private basePath = environment.basePath;

  constructor(private http: HttpClient) { }

  public getHeadlines(pageSize: string = '3', sources: string = 'google-news', language = 'en') {
    return this.http.get<any>(`${this.basePath}/top-headlines`, {
      params: {
        pageSize,
        sources,
        language,
        apiKey: environment.apiKey
      }
    });
  }

  public getNews(sortBy: string, from: string, to: string, pageSize: string = '3', sources: string = 'cnn', language: string = 'en') {
    return this.http.get<any>(`${this.basePath}/everything`, {
      params: {
        sortBy,
        from,
        to,
        pageSize,
        sources,
        language,
        apiKey: environment.apiKey
      }
    });
  }
}
