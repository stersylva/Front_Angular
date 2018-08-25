import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css']
})
export class TasksListComponent implements OnInit {

  tasks: Array<any>;

  constructor(private taskService: TaskService) { }

  ngOnInit() {
    this.list();
  }

  list(){
    this.taskService.list().subscribe(dados => this.tasks = dados);
  }

}
