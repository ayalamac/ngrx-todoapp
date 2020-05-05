import { createReducer, on } from '@ngrx/store';
import { Filtros, filtrar } from './todo-filter.actions';

export const estadoInicial: Filtros = 'todas';

// ! INICIO REDUCER /////////////////
const _todoFilterReducer = createReducer(estadoInicial,

  on(filtrar, (state, { nuevoFiltro }) => nuevoFiltro)

);
// ! FIN REDUCER /////////////////

export function todoFilterReducer(state, action) {
  return _todoFilterReducer(state, action);
}
