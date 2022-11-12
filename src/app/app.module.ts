import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodoCardComponent } from './components/todo-card/todo-card.component';
import { TooltipComponent } from './components/tooltip/tooltip.component';
import { InfoComponent } from './components/info/info.component';
import { TodoStatusComponent } from './components/todo-status/todo-status.component';
import { InlineInputComponent } from './components/inline-input/inline-input.component';
import { AddButtonComponent } from './components/add-button/add-button.component';
import { TodosFilterPipe } from './pipes/todos-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TooltipComponent,
    TodoCardComponent,
    InfoComponent,
    TodoStatusComponent,
    InlineInputComponent,
    AddButtonComponent,
    TodosFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
