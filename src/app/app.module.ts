import { NgModule } from '@angular/core';
import { DatePipe } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { EntryService } from './entry.service';
import { ExerciseService } from './exercise.service';
import { ExerciseListComponent } from './exercise-list/exercise-list.component';
import { CreateExerciseComponent } from './create-exercise/create-exercise.component';
import { EntryListComponent } from './entry-list/entry-list.component';
import { CreateEntryComponent } from './create-entry/create-entry.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { EditExerciseComponent } from './edit-exercise/edit-exercise.component';
import { EditEntryComponent } from './edit-entry/edit-entry.component';
import { TrainingSessionsListComponent } from './training-sessions-list/training-sessions-list.component';
import { SearchPipe } from './search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ExerciseListComponent,
    CreateExerciseComponent,
    EntryListComponent,
    CreateEntryComponent,
    ContactPageComponent,
    HomePageComponent,
    EditExerciseComponent,
    EditEntryComponent,
    TrainingSessionsListComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    DatePipe,
    EntryService,
    ExerciseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
