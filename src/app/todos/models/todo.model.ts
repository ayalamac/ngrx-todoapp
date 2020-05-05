export class Todo {

  public id: string;
  public descripcion: string;
  public completada: boolean;

  constructor( descripcion: string ) {

    this.id = Math.random().toString(36).substring(2) + Math.random().toString(36).substring(2);
    this.descripcion = descripcion;
    this.completada = false;

  }

}
