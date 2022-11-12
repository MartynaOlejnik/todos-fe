import { Pipe, PipeTransform } from '@angular/core';
import { ITodo } from '../app.component';

@Pipe({
  name: 'todosFilter'
})
export class TodosFilterPipe implements PipeTransform {

  transform(items: Array<ITodo>, status: string): Array<ITodo> {
    if(!items || !status) {
      return items
    }
    switch(status) {
      case 'all' : {
        return items
      }
      case 'done' : {
        return items.filter(el => el.isCompleted)
      }
      case 'todo' : {
        return items.filter(el => !el.isCompleted)
      }
      default : {
        return items
      }
    }
  }

}
