import {Injectable} from '@angular/core';
import {Task} from '../model/task';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Priority} from '../util/priority.enum';

@Injectable()
export class TaskService {

  taskList: Array<Task> = [];

  constructor(private httpClient: HttpClient) {
    // this.taskList.push(new Task('To10', 'Requirement Elicitation', true, Priority.PRIORITY1));
  }

  saveTask(task: Task): Observable<Task> {
     return this.httpClient.post<Task>('http://localhost:8080/api/v1/tasks', task);
  }

  getAllTasks(): Observable<Array<Task>> {
    return this.httpClient.get<Array<Task>>('http://localhost:8080/api/v1/tasks');
  }

}
