import { Component, OnInit } from '@angular/core';
import { TodosService } from './services/todos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  constructor(private todosService: TodosService){}

  todos: Array<ITodo> = [{
    id:'ksdlsdkf',
    value:'zadanie 1'
  },{
    id:'ksdlsdkf',
    value:'zadanie 2'
  }];

  toggleTip: Array<boolean> = [true, true];
  filter: string = "all";
  addTodo(todo: any) {
    if(!todo.id){
      this.todosService.createTodo(todo).subscribe(newTodo => {
        this.todosService.getTodos().subscribe(el => this.todos = el);
      })
    } else {
    this.todosService.edit(todo).subscribe(el => this.todosService.getTodos().subscribe(todos => this.todos = todos))
    }
  }

  onDel(id: string) {
    this.todosService.deleteTodo(id).subscribe(el => this.todosService.getTodos().subscribe(todos => this.todos = todos));
  }

  toggleStatus(todo: any) {
    this.todosService.edit(todo).subscribe(el => this.todosService.getTodos().subscribe(todos => this.todos = todos))
  }

  emptyTodo() {
    if(!this.todos.find(el => !el.id))
      this.todos.push({id: '', value: ''})
  }

  setFilter(name: string) {
    this.filter = name;
  }

  ngOnInit() {
    this.todosService.getTodos().subscribe(el => this.todos = el)
  }
  
}
export interface ITodo {
  id?: string,
  value?: string,
  isCompleted?: boolean
}