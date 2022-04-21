import { Component, OnInit } from '@angular/core';
import { Task } from '../services';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  public task: Task = {};

  constructor() { }

  ngOnInit(): void {
  }

  public onClickAddTask(): void{

    console.log('Add Task clicked')
  }

  public submitAddTaskForm(){

    console.log(this.task)
  }

}
