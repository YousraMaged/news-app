import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-news-item-component',
  templateUrl: './news-item-component.component.html',
  styleUrls: ['./news-item-component.component.scss']
})
export class NewsItemComponentComponent implements OnInit {

  @Input() type: string;
  @Input() hideImage: boolean;

  constructor() { }

  ngOnInit() {
    console.log(this.type);
  }

}
