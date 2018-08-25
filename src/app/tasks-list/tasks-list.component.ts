import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';
import { Task } from '../../models/task.model';


@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css']
})
export class TasksListComponent implements OnInit {


  tasks: Observable<Task>;
  errorMessage:string;

  constructor(private taskService: TaskService) { }

  ngOnInit() {
    this.list();
  }

  list(){
    this.taskService.getJSON()
    .subscribe(
      data => {
        this.tasks = data;
      }, error => this.errorMessage = <any> error);
    
  }

  public addTask(taskName) {
      this.taskService.addTask(taskName);
      this.list();
  }


  public updateTask(id) {
   // this.taskService.updateTask(id).subscribe(res => {});
  }

  public deleteTask(id) {
    this.taskService.deleteTask(id).subscribe(res => {});
    this.list();
  }

}
