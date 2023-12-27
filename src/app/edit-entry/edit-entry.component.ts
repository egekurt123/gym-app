import { Component } from '@angular/core';
import { Entry } from '../entry';
import { EntryService } from '../entry.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-edit-entry',
  templateUrl: './edit-entry.component.html',
  styleUrls: ['./edit-entry.component.css']
})
export class EditEntryComponent {

  id!: string;
  entry!: Entry;

  constructor(private entryService: EntryService, private route: ActivatedRoute, private router: Router) {}


  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id')!;
    this.loadEntry();
  }


  public loadEntry(): void {
    this.entryService.getEntrywithId(this.id).subscribe(
      (response: Entry) => {
        this.entry = response;
        console.log(this.entry);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }


  onSaveButtonClick(): void {
    console.log('Update entry button clicked for entry:', this.entry);
    this.entryService
    .updateEntry(this.entry)
      .subscribe(
                 () => {
                  this.router.navigate(['/exercises/']);
                },
        (error) => console.log(error),
      )
  }


}
