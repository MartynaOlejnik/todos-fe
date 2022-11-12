import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ITodo } from 'src/app/app.component';
import { TodosService } from 'src/app/services/todos.service';

@Component({
  selector: 'app-todo-card',
  templateUrl: './todo-card.component.html'
})
export class TodoCardComponent implements OnInit {
  constructor() { }

  @Input() todo: ITodo = {};
  @Output() deleted = new EventEmitter<string>();
  @Output() complition = new EventEmitter<ITodo>();
  @Output() newTodo = new EventEmitter<ITodo>();
  tmpVal: string = '';
  active: boolean = false; 
  isTooltip: boolean = false;
  statuses: Array<string> = ['oczekujące', 'zrobione', 'edycja']

  delTodo(id: any) {
    this.deleted.emit(id);
  }

  toggleStatus(todo: ITodo) {
    todo.isCompleted = !this.todo.isCompleted;
    this.complition.emit(todo)
  }
  saveValue() {
    this.todo.value = this.tmpVal;
    this.tmpVal = '';
    this.newTodo.emit(this.todo);
  }
  changeVal(e: any) {
    console.log(e);
    this.tmpVal = e;
  }
  toggleActive(e: boolean){
    this.active = e;
  }

  getType(todo: ITodo): string {
    todo.isCompleted = todo.isCompleted == undefined ? false : todo.isCompleted;
    return this.active ? this.statuses[2] : this.statuses[Number(todo.isCompleted)]
  }
  ngOnInit(): void {
  }

}
