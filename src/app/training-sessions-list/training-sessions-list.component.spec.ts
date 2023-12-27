import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingSessionsListComponent } from './training-sessions-list.component';

describe('TrainingSessionsListComponent', () => {
  let component: TrainingSessionsListComponent;
  let fixture: ComponentFixture<TrainingSessionsListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrainingSessionsListComponent]
    });
    fixture = TestBed.createComponent(TrainingSessionsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
