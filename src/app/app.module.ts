import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { TaskItemComponent } from './components/task-item/task-item.component';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { UiService } from './services/ui.service';

@NgModule({
    // register components
    declarations: [
        AppComponent,
        HeaderComponent,
        ButtonComponent,
        TasksComponent,
        TaskItemComponent,
        AddTaskComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FontAwesomeModule,
        HttpClientModule,
        FormsModule
    ],
    //register dependencies (services)
    // create single instance of service class and passed as parameters
    // available to component constructors
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
