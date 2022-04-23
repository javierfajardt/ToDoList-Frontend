import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Task, TasksService } from '../services';


@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  //@ViewChild("add-task-form-wrapper") formWrapper: ElementRef = any;

  public task: Task = {};
  public selectedButton: boolean = true;
  public addNewTaskButton: boolean = false;
  public id: number = 0;

  constructor(private taskService: TasksService) { }

  ngOnInit(): void {
  }

  public onClickAddTask(addNewTaskButton: boolean): void {

    console.log('Add Task Clicado');

    this.addNewTaskButton = !(this.addNewTaskButton);

    console.log(this.addNewTaskButton);

    //this.renderer

  }

  public submitAddTaskForm(): void {

    console.log(this.task)

    this.taskService.addTask(this.task).subscribe((createdTask: Task) => {
      console.log(createdTask);
      window.location.reload();
    });
  }

  public submitDeleteTaskForm(): void{

    this.taskService.deleteTask(this.task).subscribe((deletedTask: Task) =>{

      console.log(deletedTask);
      window.location.reload();
    });
  }
}
