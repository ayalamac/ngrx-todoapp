import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from './../models/todo.model';
import { Filtros } from './todo-filter.actions';

@Pipe({
  name: 'todoFilter'
})
export class TodoFilterPipe implements PipeTransform {

  transform(todos: Todo[], filtro: Filtros = 'todas'): Todo[] {
    if (filtro === 'todas') { return todos; }
    if (filtro === 'activas') { return todos.filter( todo => !todo.completada  ); }
    if (filtro === 'completadas') { return todos.filter( todo => todo.completada ); }
  }

}
