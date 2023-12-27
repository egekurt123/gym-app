import { Component, OnInit} from '@angular/core';
import { Entry } from '../entry';
import { EntryService } from '../entry.service';

import { HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Exercise } from '../exercise';
import { ExerciseService } from '../exercise.service';

@Component({
  selector: 'app-entries-list',
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.css']
})
export class EntryListComponent implements OnInit{

  entries!: Entry[];
  id!: string;
  exercise!: Exercise;

  constructor(private entryService: EntryService, private exerciseService: ExerciseService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id')!;
    this.loadExercise();
    this.loadEntries();
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

  public loadEntries(): void {
    this.entryService.getEntriesofExercise(this.id).subscribe(
      (response: Entry[]) => {
        this.entries = response;
        console.log(this.entries);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  onAddButtonClick(): void {
    console.log('Add entry button clicked for exercise:', this.exercise);
    this.router.navigate(['/exercises/'+ this.exercise.id + '/createEntry']);
  }

  onEditButtonClick(entryId: number|undefined): void {
    console.log('Add entry button clicked for exercise:', this.exercise);
    this.router.navigate(['/entries/'+ entryId + '/edit']);
  }

  onDeleteButtonClick(entryId: number|undefined): void {
    console.log('Delete button clicked for an entry for the exercise:', this.exercise);
    if(entryId != undefined) {
      if(confirm("Are you sure to delete this entry?")) {
        this.entryService.deleteEntry(entryId.toString()).subscribe(
          () => {
            console.log('Entry deleted successfully.');
            this.router.navigate(['/exercises/' + this.exercise.id + '/entries']);
          },
          (error) => {
            console.error('Error while deleting:', error);
          }
        );      }
    } else {
      console.log('Error while deleting: Entry ID is undefined');
    }
    window.location.reload();
  }
}
