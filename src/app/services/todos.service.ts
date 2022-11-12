import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ITodo } from '../app.component';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  constructor(private http: HttpClient) { }

  getTodos(): Observable<Array<ITodo>>{
    return this.http.get<Array<ITodo>>('http://localhost:7001/todos')
  }

  createTodo(todo: ITodo): Observable<Array<ITodo>>{
    return this.http.post<Array<ITodo>>('http://localhost:7001/todos', todo)
  } 
  deleteTodo(id: string): Observable<any> {
    return this.http.delete('http://localhost:7001/todos/'+id)
  }

  edit(todo: ITodo): Observable<ITodo>{
    return this.http.put<ITodo>('http://localhost:7001/todos', todo);
  }
}
