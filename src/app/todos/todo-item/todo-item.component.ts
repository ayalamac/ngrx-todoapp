
import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

import { Todo } from './../models/todo.model';

import { Store } from '@ngrx/store';
import { AppState } from './../../app.reducer';
import { editar, completar, borrar } from '../todo.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todo: Todo;
  @ViewChild('textEditando') textEditando: ElementRef;

  checkCompletado: FormControl;
  textEditar: FormControl;

  editing: boolean;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {

    console.log(this.todo);

    this.checkCompletado = new FormControl( this.todo.completada );
    this.textEditar = new FormControl( this.todo.descripcion, Validators.required);

    this.checkCompletado.valueChanges.subscribe( valor => {
      this.store.dispatch( completar( { id: this.todo.id } ) );
    });

  }

  edit(): void {
    this.editing = true;
    this.textEditar.setValue( this.todo.descripcion );
    setTimeout(() => {
      this.textEditando.nativeElement.select();
    }, 1);
  }

  stopEdit() {

    this.editing = false;

    if (this.textEditar.invalid ) { return; } // ! Guard clause
    if (this.todo.descripcion === this.textEditar.value ) { return; } // ! Guard clause

    this.store.dispatch(
      editar({
        id: this.todo.id,
        nuevaDescripcion: this.textEditar.value
      })
    );

  }

  delete() {
    this.store.dispatch( borrar( { id: this.todo.id } ) );
  }

}

