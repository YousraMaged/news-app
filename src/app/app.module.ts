import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { DetailsPageComponent } from './pages/details-page/details-page.component';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModuleModule } from './material-module.module';
import { NewsComponentComponent } from './components/news-component/news-component.component';
import { EditorPicksComponentComponent } from './components/editor-picks-component/editor-picks-component.component';
import { TrendingNewsComponentComponent } from './components/trending-news-component/trending-news-component.component';
import { RecentNewsComponentComponent } from './components/recent-news-component/recent-news-component.component';
import { PopularNewsComponentComponent } from './components/popular-news-component/popular-news-component.component';
import { NewsLetterComponentComponent } from './components/news-letter-component/news-letter-component.component';
import { SocialMediaComponentComponent } from './components/social-media-component/social-media-component.component';
import { NewsItemComponentComponent } from './components/news-item-component/news-item-component.component';
import { NewsInteractionsComponentComponent } from './components/news-interactions-component/news-interactions-component.component';
import { PopularNewsItemComponent } from './components/popular-news-item/popular-news-item.component';
import { FollowUsComponentComponent } from './components/follow-us-component/follow-us-component.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    DetailsPageComponent,
    NewsComponentComponent,
    EditorPicksComponentComponent,
    TrendingNewsComponentComponent,
    RecentNewsComponentComponent,
    PopularNewsComponentComponent,
    NewsLetterComponentComponent,
    SocialMediaComponentComponent,
    NewsItemComponentComponent,
    NewsInteractionsComponentComponent,
    PopularNewsItemComponent,
    FollowUsComponentComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModuleModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
