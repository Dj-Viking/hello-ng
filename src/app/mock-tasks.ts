import { Task } from "./Task";
export const TASKS: Task[] = (() => {
    let tasks = [];
    for (let i = 1; i < 7; i++) {
        tasks.push({
            id: i,
            text: `do somethingg ${Date.now().toString()}-${i.toString()}`,
            day: i.toString(),
            reminder: true
        })
    }
    return tasks;
})();