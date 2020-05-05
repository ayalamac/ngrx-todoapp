import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from 'src/app/app.reducer';
import { Todo } from './../models/todo.model';
import { Filtros } from './../filter/todo-filter.actions';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todos: Todo[] = [];
  filtro: Filtros;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.subscribe( ({ todos, filtro }) => {
      this.todos = todos;
      this.filtro = filtro;
    });
  }

}
