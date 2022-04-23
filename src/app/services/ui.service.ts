import { Injectable } from '@angular/core';
/**
 * @see https://rxjs.dev/guide/subject
 */
import { Observable, Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class UiService {
    private showAddTask: boolean = false;
    private subject = new Subject<any>();

    constructor() { }

    // call this function when the element is clicked.
    _toggleAddTask(): void {
        console.log("kfdjfkdjk");

        this.showAddTask = !this.showAddTask;
        this.subject.next(this.showAddTask);
    }

    //where we want to do something we subscribe to onToggle()
    onToggle(): Observable<any> {
        return this.subject.asObservable();
    }
}
