import { createAction, props } from '@ngrx/store';

export const crear = createAction(
  '[TODO] Crear tarea',
  props<{descripcion: string}>()
  );

export const editar = createAction(
  '[TODO] Editar tarea',
  props<{id: string , nuevaDescripcion: string}>()
  );

export const completar = createAction(
  '[TODO] Completar tarea',
  props<{id: string }>()
  );

export const completarTodas = createAction(
  '[TODO] Completar todas las tareas',
  props<{ completadas: boolean }>()
  );

export const borrar = createAction(
  '[TODO] Borrar tarea',
  props<{id: string }>()
  );

export const borrarCompletadas = createAction('[TODO] Borrar tareas completadas');
