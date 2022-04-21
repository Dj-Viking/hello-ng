import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, of } from 'rxjs';
// import { TASKS } from '../mock-tasks';
import { Task } from "../Task"

@Injectable({
    providedIn: 'root'
})
export class TaskService {
    private apiUrl = "http://localhost:5000/tasks";
    constructor(private http: HttpClient) { }


    getTasks(): Observable<Task[]> {
        // targeting an observable
        // tasks is an observable class of TASKS mock array
        // const tasks = of(TASKS);
        // return tasks;
        return this.http.get<Task[]>(this.apiUrl);
    }

    deleteTask(task: Task): Observable<Task> {
        const delete_url = `${this.apiUrl}/${task.id}`;
        return this.http.delete<Task>(delete_url);
    }

    toggleReminder(task: Task): Observable<Task> {
        task.reminder = !task.reminder;
        const toggle_url = `${this.apiUrl}${task.id}`
    }
}
