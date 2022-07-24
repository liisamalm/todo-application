import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { TaskService } from '../task.service';
import { Task } from '../task';
import { ActivatedRoute } from '@angular/router';
import { faList, faAngleDoubleLeft } from '@fortawesome/free-solid-svg-icons';
import { Location } from '@angular/common';

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.css']
})
export class TasklistComponent implements OnInit {
  public tasks: Task[] = [];

  public deleteTask: Task | undefined;
  public editTask: Task | undefined;

  faList = faList;
  faAngleDoubleLeft = faAngleDoubleLeft;

  constructor(private taskService: TaskService,
              public route: ActivatedRoute,
              private location: Location) { 
    this.tasks=[];
  }

  ngOnInit(): void {
    this.getTasks();
  }

  public getTasks(): void {
    this.taskService.getTasks().subscribe({
      next:(response: Task[]) => {
        this.tasks = response;
      },
      error:(error: HttpErrorResponse) => {
        alert(error.message);
      }
    });
  }

  public onOpenModal(mode:string, task?:Task): void {
    if (mode === 'edit'){
      this.editTask = task;
    }
  }

  public onUpdateTask(task:Task): void {
    this.taskService.updateTask(task).subscribe({
      next:(response:Task) => {
        console.log(response);
        this.getTasks();
      },
      error: (error:HttpErrorResponse) => {
        alert(error.message);
      }
    });
  }

  public onDeleteTask (taskId: number): void {
   
    console.log('ondeleteTask')
    this.taskService.deleteTask(taskId).subscribe({
      next:(response:void) => {
       
        console.log(response)
        this.getTasks();
      }
    }
    );
}

  goBack(): void {
    this.location.back();
  }
}
