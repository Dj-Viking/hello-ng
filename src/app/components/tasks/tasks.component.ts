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
        this.taskService
            .getTasks()
            .subscribe((tasks) => this.tasks = tasks);
    }

    // emitted the delete event from the inner component within the tasks component
    // to then change the UI based on when the event is emitted and then 
    // subscribe to the service delete task method for when the subscription
    // exposes the result to the parent component
    deleteTask(task: Task): void {
        this.taskService
            .deleteTask(task)
            .subscribe(() => {
                this.tasks = this.tasks.filter(t => t.id !== task.id);
            });
    }

    //the child component is emitting an event to this parent
    // so that the parent can change one of it's dependencies 
    toggleReminder(task: Task): void {
        task.reminder = !task.reminder;
        this.taskService
            .updateTaskReminder(task)
            .subscribe();

    }

}
