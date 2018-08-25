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
       // console.log("dados = " + data[15].id);
       // console.log("dados = " + data[15].name);

        console.log("tasks = " + this.tasks[15].name);
      }, error => this.errorMessage = <any> error);
  }

}
