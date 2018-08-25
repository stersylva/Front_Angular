import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';
import { Task } from '../models/task.model';

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

  
   addTask(taskName) {
      const obj = {
        name: taskName
      };
      
      this.http.post(this.tasksUrl, obj)
          .subscribe(res => console.log('Done'));
    }

    updateTask(id) {

      
      return this.http.put(this.tasksUrl, id);
    }

    deleteTask(id) {
      return this.http.delete(`${this.tasksUrl}/${id}`);
    }
   
}
