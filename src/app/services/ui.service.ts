import { Injectable } from '@angular/core';
/**
 * @see https://rxjs.dev/guide/subject
 */
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class UiService {
    private showAddTask: boolean = false;
    private subject = new Subject<any>();

    constructor() { }
}
