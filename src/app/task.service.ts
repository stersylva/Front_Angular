import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';

@Injectable(
  {providedIn: 'root'}
)
export class TaskService {

  tasksUrl = 'http://localhost:8000/tasks';

  constructor(private http: HttpClient) {
    this.getJSON().subscribe(data => {
      //console.log(data);
    });
   }

   getJSON(): Observable<any> {
      return this.http.get(this.tasksUrl);
    }
   
}
