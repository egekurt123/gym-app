import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Exercise } from './exercise';

@Injectable({
  providedIn: 'root'
})
export class ExerciseService {

  private readonly BASEURL: string = `http://localhost:8080`

  constructor(private httpClient: HttpClient) { }

  public getAllExercises(): Observable<Exercise[]> {
    return this.httpClient.get<Exercise[]>(`${this.BASEURL}/exercises`);
  }

  public getExercisewithId(exerciseId: string): Observable<Exercise> {
    return this.httpClient.get<Exercise>(`${this.BASEURL}/exercises/${exerciseId}`);
  }

  public createExercise(exercise: Exercise): Observable<Exercise> {
    return this.httpClient.post<Exercise>(`${this.BASEURL}/exercises`, exercise);
  }

  public updateExercise(exercise: Exercise): Observable<Exercise> {
    return this.httpClient.put<Exercise>(`${this.BASEURL}/exercises/${exercise.id}`, exercise);
  }

  public deleteExercise(exerciseId: string): Observable<any> {
    return this.httpClient.delete(`${this.BASEURL}/exercises/${exerciseId}`);
  }

}
