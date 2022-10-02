import { Injectable } from '@angular/core';
import reviews from '../../../../assets/reviews.json';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  constructor() { }

  getReviews(): any[] {
    return reviews
  }
}
