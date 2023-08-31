import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { GoalService } from '../goal.service';
import { Goal } from '../models/goal.model';

@Component({
  selector: 'app-add-goal',
  templateUrl: './add-goal.component.html',
  styleUrls: ['./add-goal.component.scss'],
})
export class AddGoalComponent {
  goalForm = this.fb.group({
    specific: [''],
    measurable: [''],
    achievable: [''],
    realistic: [''],
    timely: [''],
  });
  constructor(private fb: FormBuilder, private goalService: GoalService) {}
  onSubmit() {
    this.goalService.post(this.goalForm.value as Goal).subscribe((data) => {
      console.log(data);
    });
  }
}
