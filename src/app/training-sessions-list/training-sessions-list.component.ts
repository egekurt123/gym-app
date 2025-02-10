import {Component, OnInit} from '@angular/core';
import {EntryService} from "../entry.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Entry} from "../entry";
import {HttpErrorResponse} from "@angular/common/http";
import {TrainingSession} from "../training-session";

@Component({
  selector: 'app-training-sessions-list',
  templateUrl: './training-sessions-list.component.html',
  styleUrls: ['./training-sessions-list.component.css']
})
export class TrainingSessionsListComponent implements OnInit {

  constructor(private entryService: EntryService, private route: ActivatedRoute, private router: Router) {
  }

  sessions: TrainingSession[] = [];
  entries!: Entry[]

  ngOnInit() {
    this.loadEntries();
  }

  public loadEntries(): void {
    this.entryService.getAllEntries().subscribe(
      (response: Entry[]) => {
        this.entries = response;
        this.initializeSessions(response)
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public initializeSessions(entries: Entry[]): void {
    entries.forEach(a => {
        let session = this.sessions.find(c => c.date === a.date);
        if (session) {
          session.entries.push(a);
        } else {
          this.sessions.push(new TrainingSession(a.date, [a], "TODO"));
        }
      }
    )
    this.initializeAttributes();
  }

  public initializeAttributes(): void {
    this.sessions.map(session => {
      let sets = 0;
      let exercises = 0;
      session.entries.forEach(entry => {
        sets += entry.sets
        exercises++;
      })
      session.exerciseCount = exercises;
      session.totalSets = sets;
    })
  }

}
