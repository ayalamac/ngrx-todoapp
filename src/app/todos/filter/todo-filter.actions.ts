import { createAction, props } from '@ngrx/store';

export type Filtros = 'todas' | 'activas' | 'completadas';

export const filtrar = createAction(
  '[FILTRO] Cambiar el filtro',
  props<{ nuevoFiltro: Filtros }>()
  );
