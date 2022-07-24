import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TaskService } from '../task.service';
import { Task } from '../task';
import { HttpErrorResponse } from '@angular/common/http';
import { Location } from '@angular/common';
import { faAngleDoubleLeft } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
 

  public tasks: Task[] = [];
  task!: any;
  faAngleDoubleLeft = faAngleDoubleLeft; 

  constructor(private taskService: TaskService,
              private location: Location) { 
    this.tasks=[];
    this.task = { name: "", about: "", priority: ""};
  }

  ngOnInit(): void {
    this.getTasks();
  }

  
  public getTasks(): void {
    this.taskService.getTasks().subscribe({
      next:(response: Task[]) => {
        this.tasks = response;
        console.log(this.tasks)
      },
      error:(error: HttpErrorResponse) => {
        alert(error.message);
      }
    });
  }

  public onAddTask(addForm: NgForm): void {
     this.taskService.addTask(addForm.value).subscribe();
     this.task = { name: "", about: "", priority: ""};
     alert('task added!')
  }

  goBack(): void {
    this.location.back();
  }
}