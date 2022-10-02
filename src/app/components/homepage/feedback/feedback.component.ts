import { Component, OnInit } from '@angular/core';
import { FeedbackService } from './feedback.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {
  reviews: any[] = [];
  currentReview: number = 0;
  
  updateCurrentReview = (newReview: number): void => {
    if (newReview <= -1) {
      this.currentReview = this.reviews.length - 1;
    } else if (newReview >= this.reviews.length) {
      this.currentReview = 0;
    } else {
      this.currentReview = newReview;
    }
  }

  constructor(private feedbackService: FeedbackService) {
  }

  ngOnInit(): void {
    this.reviews = this.feedbackService.getReviews()
  }

}
