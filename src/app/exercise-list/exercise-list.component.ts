import { Component, OnInit} from '@angular/core';
import { Exercise } from '../exercise';
import { ExerciseService } from '../exercise.service';

import { FormsModule } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-exercise-list',
  templateUrl: './exercise-list.component.html',
  styleUrls: ['./exercise-list.component.css']
})
export class ExerciseListComponent implements OnInit {

  exercises!: Exercise[];
  searchTerm: string = '';


  constructor(private exerciseService: ExerciseService, private router: Router) {}

  ngOnInit() {
    this.loadExercises();
  }


  public loadExercises(): void {
    this.exerciseService.getAllExercises().subscribe(
      (response: Exercise[]) => {
        this.exercises = response;
        console.log(this.exercises);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  onEntriesButtonClick(exercise: Exercise): void {
    // Handle button click (e.g., open a modal for editing)
    console.log('Edit button clicked for exercise:', exercise);
    this.router.navigate(['/exercises/'+ exercise.id + '/entries']);
  }

  onEditButtonClick(exercise: Exercise): void {
    // Handle button click (e.g., open a modal for editing)
    console.log('Edit button clicked for exercise:', exercise);
    this.router.navigate(['/exercises/'+ exercise.id + '/edit']);
  }




}
