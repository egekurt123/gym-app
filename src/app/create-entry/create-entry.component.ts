import { Component, OnInit} from '@angular/core';
import { DatePipe } from '@angular/common'
import { Entry } from '../entry';
import { EntryService } from '../entry.service';

import { HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Exercise } from '../exercise';
import { ExerciseService } from '../exercise.service';

@Component({
  selector: 'app-create-entry',
  templateUrl: './create-entry.component.html',
  styleUrls: ['./create-entry.component.css']
})
export class CreateEntryComponent implements OnInit {

  id!: string;
  exercise!: Exercise;

  entry: Entry = {
    exercise: '',
    sets: 0,
    weights: '',
    reps: '',
    date: new Date()
  };

  constructor(private entryService: EntryService, private exerciseService: ExerciseService, private route: ActivatedRoute, private router: Router, private datepipe: DatePipe) {}

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

  onSubmit(): void {
    this.entry.exercise = this.exercise.exerciseName;
    this.entryService
     .createEntry(this.entry)
       .subscribe(
                  () => {
            this.router.navigate(['/exercises/'+ this.exercise.id + '/entries'])
         },
         (error) => console.log(error),
       )
  }



}
