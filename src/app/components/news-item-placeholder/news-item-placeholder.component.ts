import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-news-item-placeholder',
  templateUrl: './news-item-placeholder.component.html',
  styleUrls: ['./news-item-placeholder.component.scss']
})
export class NewsItemPlaceholderComponent {

  @Input() orientation: string;

}
