import { Component, OnInit,ViewChild,ElementRef  } from '@angular/core';
import { TaskService } from '../task.service';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';
import { Task } from '../../models/task.model';


@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css']
})
export class TasksListComponent implements OnInit  {


  tasks: Observable<Task>;
  errorMessage:string;

  @ViewChild('qtdCreated') qtdCreated: ElementRef;
  @ViewChild('qtdDone') qtdDone: ElementRef;
  @ViewChild('qtdPending') qtdPending: ElementRef;


  constructor(private taskService: TaskService) { }

  ngOnInit() {
    this.list();
  }

  list(){
    let started = 0;
    let pending = 0;
    let done = 0;

    this.taskService.getJSON()
    .subscribe(
      data => {
        this.tasks = data;
        for(let d of data){
          if (d['status'] === 'start'){
            started = started + 1;
          } else if (d['status'] === 'progress') {
            pending = pending + 1;
          } else {
            done = done + 1;
          }
        }

        this.qtdCreated.nativeElement.value = started + pending + done;   
        this.qtdDone.nativeElement.value = done;   
        this.qtdPending.nativeElement.value = pending; 

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
