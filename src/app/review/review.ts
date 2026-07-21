import { Component, computed, signal } from '@angular/core';
import { ReviewInterface, ReviewService } from '../service/review-service';

@Component({
  selector: 'app-review',
  imports: [],
  templateUrl: './review.html',
  styleUrl: './review.css',
})
export class Review {

  reviewAllData = signal<ReviewInterface[]>([]);
  currentIndex = signal<number>(0);

  reviewData = computed<ReviewInterface | undefined>(() => this.reviewAllData()[this.currentIndex()]);

  constructor(private reviewService: ReviewService) {}

  ngOnInit() {
    this.reviewService.getReviewData().subscribe(data => {
      this.reviewAllData.set(data);
    })
  }

  previousClick() {
    this.currentIndex.set(this.currentIndex() - 1 < 0 ? this.reviewAllData().length - 1 : this.currentIndex() - 1);
  }

  nextClick() {
    this.currentIndex.set(this.currentIndex() + 1 > this.reviewAllData().length - 1 ? 0 : this.currentIndex() + 1);
  }

  randomClick() {
    this.currentIndex.set(Math.floor(Math.random() * this.reviewAllData().length));
  }

}
