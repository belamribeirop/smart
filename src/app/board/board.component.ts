import { Component } from '@angular/core';
import { Goal } from '../models/goal.model';
import { GoalService } from '../goal.service';
interface Smart {
  letter: string;
  name: string;
}
@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent {
  smart: Smart[] = [
    { letter: 'S', name: 'Specific' },
    { letter: 'M', name: 'Measurable' },
    { letter: 'A', name: 'Achievable' },
    { letter: 'R', name: 'Realistic' },
    { letter: 'T', name: 'Timely' },
  ];
  goals: Goal[] = [];
  constructor(private goalService: GoalService) {}
  ngOnInit() {
    this.get();
  }

  get() {
    this.goalService.get().subscribe((goal) => {
      this.goals = goal;
    });
  }
}
