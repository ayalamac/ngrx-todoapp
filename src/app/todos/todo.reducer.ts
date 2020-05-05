import { Todo } from './models/todo.model';
import { createReducer, on } from '@ngrx/store';
import { crear, editar, completar, completarTodas, borrar, borrarCompletadas} from './todo.actions';

export const estadoInicial: Todo[] = [
  new Todo('Angular Avanzado!'),
  new Todo('Angular NgRx!'),
  new Todo('UX UI Gestión de Documentos'),
  new Todo('Propuesta Migración de data'),
  new Todo('Propuesta Campaña Google'),
];

const _todoReducer = createReducer(estadoInicial,

  on(crear, (state, { descripcion }) => [...state, new Todo( descripcion )] ),

  on(editar, (state, { id, nuevaDescripcion }) => {
    return state.map( todo => {
      if ( todo.id !== id ) { return todo; } // ! Guard clause
      if ( todo.descripcion === nuevaDescripcion ) { return todo; } // ! Guard clause
      return {
        ...todo,
        descripcion: nuevaDescripcion, // * Action Purpose
      };
    });
  }),

  on(completar, (state, { id }) => {
    return state.map( todo => {
      if (todo.id !== id) { return todo; } // ! Guard clause
      return {
        ...todo,
        completada: !todo.completada, // * Action Purpose
      };
    });
  }),

  on(completarTodas, (state, { completadas }) => state.map( todo => {
    return {...todo, completada: completadas };
  })),

  on(borrar, (state, { id }) => state.filter( todo => todo.id !== id ) ),

  on(borrarCompletadas, (state) => state.filter( todo => !todo.completada ) ),
);

export function todoReducer(state, action) {
  return _todoReducer(state, action);
}
