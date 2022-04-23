import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from "../../Task";
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';
@Component({
    selector: 'app-add-task',
    templateUrl: './add-task.component.html',
    styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {
    @Output() onAddTask: EventEmitter<Task> = new EventEmitter();
    text!: string;
    day!: string;
    reminder: boolean = false;
    showAddTask: boolean = false;
    subscription!: Subscription;

    constructor(private uiService: UiService) {
        this.subscription = this.uiService
            .onToggle()
            .subscribe((value) => {
                this.showAddTask = value;
            });
    }

    ngOnInit(): void {
    }

    //TODO: follow angulars pattern of using the FormControl instance
    /**
     * @see https://angular.io/guide/form-validation
     */
    onSubmit(): void {
        if (!this.text) {
            alert("add text please");
            return;
        }
        const newTask = {
            text: this.text,
            day: this.day,
            reminder: this.reminder
        }

        // emit the event to submit this new object tot he parent component who has precedence over
        // the task children components
        // the $event variable passed into the function being emitted to the parent is the variable
        // passed into this emit function
        this.onAddTask.emit(newTask);
        // clear the form after submit
        this.text = ""
        this.day = ""
        this.reminder = false

    }
}
