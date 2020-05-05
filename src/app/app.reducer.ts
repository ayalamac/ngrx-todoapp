import { ActionReducerMap } from '@ngrx/store';

// Tipado
import { Todo } from './todos/models/todo.model';
import { Filtros } from './todos/filter/todo-filter.actions';

// Reducers
import { todoReducer } from './todos/todo.reducer';
import { todoFilterReducer } from './todos/filter/todo-filter.reducer';

export interface AppState {
  todos: Todo[];
  filtro: Filtros;
}

export const appReducers: ActionReducerMap<AppState> = {
  todos: todoReducer,
  filtro: todoFilterReducer
};
