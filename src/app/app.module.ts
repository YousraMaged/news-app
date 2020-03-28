import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { DetailsPageComponent } from './pages/details-page/details-page.component';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModuleModule } from './material-module.module';
import { NewsComponent } from './components/news-component/news-component.component';
import { EditorPicksComponent } from './components/editor-picks-component/editor-picks-component.component';
import { TrendingNewsComponent } from './components/trending-news-component/trending-news-component.component';
import { RecentNewsComponent } from './components/recent-news-component/recent-news-component.component';
import { PopularNewsComponent } from './components/popular-news-component/popular-news-component.component';
import { NewsLetterComponent } from './components/news-letter-component/news-letter-component.component';
import { SocialMediaComponent } from './components/social-media-component/social-media-component.component';
import { NewsItemComponent } from './components/news-item-component/news-item-component.component';
import { NewsInteractionsComponent } from './components/news-interactions-component/news-interactions-component.component';
import { PopularNewsItemComponent } from './components/popular-news-item/popular-news-item.component';
import { ContactsComponent } from './components/contacts-component/contacts-component.component';
import { NewsItemPlaceholderComponent } from './components/news-item-placeholder/news-item-placeholder.component';
import { NewsService } from './services/news.service';
import { LoaderService } from './services/loader.service';
import { HelperService } from './services/helper.service';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    DetailsPageComponent,
    NewsComponent,
    EditorPicksComponent,
    TrendingNewsComponent,
    RecentNewsComponent,
    PopularNewsComponent,
    NewsLetterComponent,
    SocialMediaComponent,
    NewsItemComponent,
    NewsInteractionsComponent,
    PopularNewsItemComponent,
    ContactsComponent,
    NewsItemPlaceholderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModuleModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    NewsService,
    LoaderService,
    HelperService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
