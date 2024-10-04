import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-todo-input-add-itens',
  templateUrl: './todo-input-add-itens.component.html',
  styleUrl: './todo-input-add-itens.component.css'
})
export class TodoInputAddItensComponent {
  @Output() public emitTask = new EventEmitter();

  public addItemTask: string = "";

  public submitTask(){
    this.addItemTask= this.addItemTask.trim();
    if(this.addItemTask){
      this.emitTask.emit(this.addItemTask);
      this.addItemTask = "";
    }
  }



}
