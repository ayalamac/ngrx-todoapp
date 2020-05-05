import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

import { Store } from '@ngrx/store';
import { AppState } from './../../app.reducer';
import * as actions from './../todo.actions';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css']
})
export class TodoAddComponent implements OnInit {

  textoNuevaTarea: FormControl;

  constructor( private store: Store<AppState> ) {
    this.textoNuevaTarea = new FormControl('', Validators.required)
  }

  ngOnInit(): void {
  }

  agregar() {
    if (this.textoNuevaTarea.invalid) { return; }
    this.store.dispatch( actions.crear({ descripcion: this.textoNuevaTarea.value }));
    this.textoNuevaTarea.reset();
  }

}
