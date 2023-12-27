import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExerciseListComponent } from './exercise-list/exercise-list.component';
import { CreateExerciseComponent } from './create-exercise/create-exercise.component';
import { EntryListComponent } from './entry-list/entry-list.component';
import { CreateEntryComponent } from './create-entry/create-entry.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { EditEntryComponent } from './edit-entry/edit-entry.component';
import { EditExerciseComponent } from './edit-exercise/edit-exercise.component';
import { HomePageComponent } from './home-page/home-page.component';
import { TrainingSessionsListComponent } from './training-sessions-list/training-sessions-list.component';



const routes: Routes = [
  { path: 'exercises', component: ExerciseListComponent },
  { path: 'addexercise', component: CreateExerciseComponent },
  { path: 'exercises/:id/entries', component: EntryListComponent },
  { path: 'exercises/:id/createEntry', component: CreateEntryComponent },
  { path: 'entries/:id/edit', component: EditEntryComponent },
  { path: 'exercises/:id/edit', component: EditExerciseComponent },
  { path: 'sessions', component: TrainingSessionsListComponent },
  { path: 'contact', component: ContactPageComponent },
  { path: 'home', component: HomePageComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
