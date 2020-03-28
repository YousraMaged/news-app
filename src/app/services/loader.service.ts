import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  constructor() { }

  public loadingState = {
    headlines: true,
    editorPicks: true,
    trending: true,
    recent: true,
    popular: true
  };

  public isLoading = new BehaviorSubject<any>(this.loadingState);

  public change(type: string, state: boolean) {
    this.loadingState[type] = state;
    this.isLoading.next(this.loadingState);
  }
}
