import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Goal } from './models/goal.model';

@Injectable({
  providedIn: 'root',
})
export class GoalService {
  baseUrl = 'http://localhost:3000/goal';
  constructor(private http: HttpClient) {}
  post(goal: Goal) {
    return this.http.post<Goal>(this.baseUrl, goal);
  }
  get() {
    return this.http.get<Goal[]>(this.baseUrl);
  }
}
