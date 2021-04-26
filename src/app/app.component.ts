import {Component, OnInit} from '@angular/core';
import {TaskService} from './service/task.service';
import {Priority} from './util/priority.enum';
import {Task} from './model/task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  editor = false;
  disabled = true;
  tasktext = '';
  readonly defaultTaskTest = 'e.g., Design meeting at 11am p1 # Meeting ';
  defaultTask = this.defaultTaskTest;
  edit = false;
  eventValue = -1;

  constructor(public taskService: TaskService) {
  }

  ngOnInit(): void {
    this.taskService.getAllTasks().subscribe(list => {
      this.taskService.taskList = list;
      for (const task of this.taskService.taskList) {
        console.log(task);
      }
    });
  }

  saveTask(task: string): void {
    const length = this.taskService.taskList.length;
    let id = '' + length;
    if (length < 100) {
      id = 'T' + length;
    }
    if (length < 10) {
      id = 'T0' + length;
    }

    this.taskService.taskList.push(new Task(id, task, false, Priority.PRIORITY4));
    this.tasktext = '';
    this.defaultTask = this.defaultTaskTest;
    // this.taskService.saveTask();
  }

  editTask(event: Event, i: number): void {
    this.eventValue = i;

  }

  deleteTask(): void {
    alert('Delete Babe');
  }
}
