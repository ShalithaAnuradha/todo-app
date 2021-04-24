import {Component} from '@angular/core';
import {TaskService} from './service/task.service';
import {Priority} from './util/priority.enum';
import {Task} from './model/task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  editor = false;
  disabled = true;
  tasktext = '';
  readonly defaultTaskTest = 'e.g., Design meeting at 11am p1 # Meeting ';
  defaultTask = this.defaultTaskTest;
  edit = false;
  eventValue = -1;

  constructor(public taskService: TaskService) {
  }

  saveTask(task: string): void {
    this.taskService.taskList.push(new Task(task, false, Priority.PRIORITY4));
    this.tasktext = '';
    this.defaultTask = this.defaultTaskTest;
  }

  editTask(event: Event, i: number): void {
    // this.taskService.taskList.splice(i, 1);
    // (event.target as any).value = i;
    // console.log(i, (event.target as any).value);
    this.eventValue = i;

  }

}
