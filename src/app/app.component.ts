import {Component, DoCheck, OnInit} from '@angular/core';
import {TaskService} from './service/task.service';
import {Priority} from './util/priority.enum';
import {Task} from './model/task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

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
    });
  }

  saveTask(task: string): void {
    const no = this.taskService.taskList.length + 1;
    let id = 'T' + no;
    if (no < 100) {
      id = 'T0' + no;
    }
    if (no < 10) {
      id = 'T00' + no;
    }

    this.taskService.saveTask(new Task(id, task, false, Priority.PRIORITY4)).subscribe(task1 => {
      console.log(task1);
      this.taskService.taskList.push(new Task(id, task, false, Priority.PRIORITY4));
    });
    this.tasktext = '';
    this.defaultTask = this.defaultTaskTest;
  }

  editTask(event: Event, i: number): void {
    this.eventValue = i;

  }

  deleteTask(): void {
    alert('Delete Babe');
  }
}
