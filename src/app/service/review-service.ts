import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface ReviewInterface {
  id: number;
  name: string;
  job: string;
  image: string;
  text: string;
}

@Injectable({
  providedIn: 'root',
})
export class ReviewService {
  
  reviewUrl = "http://localhost:3000/reviews";

  constructor(private http: HttpClient) {}

  getReviewData(): Observable<ReviewInterface[]> {
    return this.http.get<ReviewInterface[]>(this.reviewUrl);
  }

}
