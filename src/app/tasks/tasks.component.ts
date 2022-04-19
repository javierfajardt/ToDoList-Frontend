import { Component, OnInit } from '@angular/core';
import { Task } from '../task';
import { TASKS } from '../mock-tasks';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  Task: Task = {
    id: 1,
    status: "completado"
  };

  task = TASKS;

  selectedTask?: Task;
  onSelect(Task: Task): void {
    this.selectedTask = Task;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
