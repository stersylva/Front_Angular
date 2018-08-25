import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
 

import { AppComponent } from './app.component';
import { TasksListComponent } from './tasks-list/tasks-list.component';
import { TaskService } from './task.service';

@NgModule({
  declarations: [
    AppComponent,
    TasksListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [ TaskService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
