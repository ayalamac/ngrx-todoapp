import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';

import { Filtros, filtrar } from './../filter/todo-filter.actions';
import { borrarCompletadas } from '../todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css']
})
export class TodoFooterComponent implements OnInit {

  tareasPendientes: number;
  tareasCompletadas: number;

  currentFilter: Filtros = 'todas';
  filtros: Filtros[] = ['todas', 'activas', 'completadas'];

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {

    // this.store.select('filtro')
    // .subscribe(filtro => {
    //   console.log('Filtro actual: ', filtro);
    //   this.currentFilter = filtro;
    // });

    this.store.subscribe( state => {

      console.log('Filtro actual: ', state.filtro);
      this.currentFilter = state.filtro;
      this.tareasPendientes = state.todos.filter( todo => todo.completada === false ).length;
      this.tareasCompletadas = state.todos.length - this.tareasPendientes;

    });

  }

  changeCurrentFilter( newFilter: Filtros ) {
    if (newFilter === this.currentFilter) { return; } // ! Guard Clause
    this.store.dispatch( filtrar({ nuevoFiltro: newFilter }));
  }

  deleteCompleted() {
    if (this.tareasCompletadas === 0) { return; } // ! Guard Clause
    this.store.dispatch( borrarCompletadas() );
  }

}
