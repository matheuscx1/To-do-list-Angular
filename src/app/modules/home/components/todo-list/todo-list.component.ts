import { TaskList } from './../../model/task-list';
import { Component, DoCheck } from '@angular/core';

//interface

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent implements DoCheck {

  public taskList: Array <TaskList> = JSON.parse(localStorage.getItem("list") || '[]');

  public deleteTask(event:number){
    this.taskList.splice(event,1)
  }

  public deleteAllTask(){
    const confirm = window.confirm("Voce deseja deletar tudo?");

    if(confirm){
      this.taskList = [];
    }
  }

  public setEmmitTask(event: string){
    this.taskList.push({task: event, checked: false})

  }

  ngDoCheck(){
 this.setLocalStorage();
}

public validationInput(event:string, index:number){
    if(!event.length){
      const confirm = window.confirm("Task vazia, Deseja deletar?");
      if(confirm){
          this.deleteTask(index);
      }
    }
}


public setLocalStorage(){
  if(this.taskList){
    this.taskList.sort((first, last)=> Number(first.checked) - Number(last.checked) )
    localStorage.setItem("list", JSON.stringify(this.taskList));

  }
}
}
