import { Component, OnInit } from '@angular/core';
import { Task } from '../task';
//import { TASKS } from '../mock-tasks';
import { TasksService } from '../services';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  public tasks:Task[]= []; 

  //task = TASKS;

  /* selectedTask?: Task;
  onSelect(Task: Task): void {
    this.selectedTask = Task;
  } */

  constructor(private taskService:TasksService) { }

  ngOnInit(): void {
    this.taskService.listTasks().subscribe((data)=>{
      this.tasks = data;
    })
  }

}
