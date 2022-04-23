import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { TasksComponent } from './components/tasks/tasks.component';

const routes: Routes = [
    {// implicit leading "/" on these routes
        path: '', component: TasksComponent
    },
    {
        path: 'about', component: AboutComponent
    },
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
