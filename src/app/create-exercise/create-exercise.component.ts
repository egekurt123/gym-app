import { Component, OnInit } from '@angular/core';
import { ExerciseService } from '../exercise.service';
import { Exercise } from '../exercise';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create-exercise',
  templateUrl: './create-exercise.component.html',
  styleUrls: ['./create-exercise.component.css']
})
export class CreateExerciseComponent implements OnInit{

  exercise: Exercise = {
    category: '', // Initialize with default values if needed
    exerciseName: ''
  };

  constructor(private exerciseService: ExerciseService, private router: Router) { }

  ngOnInit(): void {
    
  }


  onSubmit(): void {
    
    this.exerciseService
       .createExercise(this.exercise)
       .subscribe(
                   () => {
             this.router.navigate(['/exercises'])
          },
          (error) => console.log(error),
            )
    
  }
}
