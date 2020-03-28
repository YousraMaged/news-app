import { Component } from '@angular/core';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.scss']
})
export class VoteComponent {
  public upvoted: boolean;
  public downvoted: boolean;

  vote(type) {
    if (type === 'up') {
      this.upvoted = !this.upvoted;
      this.downvoted = false;
    } else if (type === 'down') {
      this.downvoted = !this.downvoted;
      this.upvoted = false;
    }
  }
}
