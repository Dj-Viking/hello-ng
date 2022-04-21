import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/Task';
import { TaskService } from 'src/app/services/task.service';
@Component({
    selector: 'app-tasks',
    templateUrl: './tasks.component.html',
    styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {
    tasks: Task[] = [];

    constructor(private taskService: TaskService) { }

    ngOnInit(): void {
        // update the tasks property of this component class
        // whenever the service detects a change in the tasks array
        // sort of like a .then resolved promise callback
        // http client of angular returns an observable
        this.taskService.getTasks().subscribe((tasks) => this.tasks = tasks);
    }

}