import { Component, Input } from '@angular/core';
import { NewsItem } from '../../models/news-item';

@Component({
  selector: 'app-editor-picks-component',
  templateUrl: './editor-picks-component.component.html',
  styleUrls: ['./editor-picks-component.component.scss']
})
export class EditorPicksComponent {

  @Input() isLoading: boolean;
  @Input() news: NewsItem;
  public placeholders: Array<number> = Array(4).fill(1);

}
