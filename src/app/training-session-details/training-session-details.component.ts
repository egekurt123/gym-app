import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TrainingSession } from '../training-session';
import { Entry } from '../entry';

@Component({
  selector: 'app-training-session-details',
  templateUrl: './training-session-details.component.html',
  styleUrls: ['./training-session-details.component.css']
})
export class TrainingSessionDetailsComponent {

  constructor(private route: ActivatedRoute, private router: Router) {}

  session: TrainingSession | undefined;

  ngOnInit() {
    const sessionData = history.state.session;
    if (sessionData) {
      this.session = sessionData;
    } else {
      // Redirect back if no session data is found (direct URL access)
      this.router.navigate(['/sessions']);
    }
  }


}
