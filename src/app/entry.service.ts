import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Entry } from './entry';

@Injectable({
  providedIn: 'root'
})
export class EntryService {

  private readonly BASEURL: string = `http://localhost:8080`

  constructor(private httpClient: HttpClient) { }

  public getAllEntries(): Observable<Entry[]> {
    return this.httpClient.get<Entry[]>(`${this.BASEURL}/entries`);
  }

  public getEntriesofExercise(id: string): Observable<Entry[]> {
    return this.httpClient.get<Entry[]>(`${this.BASEURL}/exercises/${id}/entries`);
  }

  public getEntrywithId(entryId: string): Observable<Entry> {
    return this.httpClient.get<Entry>(`${this.BASEURL}/entries/${entryId}`);
  }

  public createEntry(entry: Entry): Observable<Entry> { 
    return this.httpClient.post<Entry>(`${this.BASEURL}/entries`, entry);
  }

  public updateEntry(entry: Entry): Observable<Entry> { 
    return this.httpClient.put<Entry>(`${this.BASEURL}/entries/${entry.id}` , entry);
  }

  public deleteEntry(entryId: string): Observable<any> {
    return this.httpClient.delete(`${this.BASEURL}/entries/${entryId}`);
  }
}
