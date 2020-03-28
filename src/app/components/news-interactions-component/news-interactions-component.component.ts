import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { HelperService } from '../../services/helper.service';

@Component({
  selector: 'app-news-interactions-component',
  templateUrl: './news-interactions-component.component.html',
  styleUrls: ['./news-interactions-component.component.scss']
})
export class NewsInteractionsComponent implements OnInit {

  public shares: number;
  public comments: number;

  constructor(private helper: HelperService, private cd: ChangeDetectorRef) { }

  ngOnInit() {
    this.shares = this.helper.generateNumber();
    this.comments = this.helper.generateNumber();
    this.cd.detectChanges();
  }

}
