import { Component } from '@angular/core';
import { ExerciseService } from '../exercise.service';
import { Exercise } from '../exercise';
import { HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-exercise',
  templateUrl: './edit-exercise.component.html',
  styleUrls: ['./edit-exercise.component.css']
})
export class EditExerciseComponent {

  id!: string;
  exercise!: Exercise;

  constructor(private exerciseService: ExerciseService, private route: ActivatedRoute, private router: Router) {}


  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id')!;
    this.loadExercise();
  }

  public loadExercise(): void {
    this.exerciseService.getExercisewithId(this.id).subscribe(
      (response: Exercise) => {
        this.exercise = response;
        console.log(this.exercise);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }


  onSaveButtonClick(): void {
    console.log('Update entry button clicked for entry:', this.exercise);
    this.exerciseService
    .updateExercise(this.exercise)
      .subscribe(
                 () => {
                  this.router.navigate(['/exercises/']);
                },
        (error) => console.log(error),
      )
  }

  onDeleteButtonClick(): void {
    console.log('Delete button clicked for an entry for the exercise:', this.exercise);
    if(this.id != undefined) {
      if(confirm("Are you sure to delete this exercise?")) {
        this.exerciseService.deleteExercise(this.id.toString()).subscribe(
          () => {
            console.log('Exercise deleted successfully.');
            this.router.navigate(['/exercises']);
          },
          (error) => {
            console.error('Error while deleting:', error);
          }
        );      }
    } else {
      console.log('Error while deleting: Exercise ID is undefined');
    }
  }

}
