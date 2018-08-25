import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 

@Injectable(
  {providedIn: 'root'}
)
export class TaskService {

  tasksUrl = 'http://localhost:8000/tasks';

  constructor(private http: HttpClient) { }

    list() {
      return this.http.get<any[]>(`${this.tasksUrl}`);
    }
   
}
