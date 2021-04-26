import {Injectable} from '@angular/core';
import {Task} from '../model/task';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class TaskService {

  taskList: Array<Task> = [];

  constructor(private httpClient: HttpClient) {
    // this.taskList.push(new Task('Requirement Elicitation', true, Priority.PRIORITY1));
  }

  saveTask(): void {
  }

  getAllTasks(): Observable<Array<Task>> {
    return this.httpClient.get<Array<Task>>('http://localhost:8080/api/v1/tasks');
  }

}
