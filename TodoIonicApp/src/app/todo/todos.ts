import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { addtodoPage } from "./add/addtodo";
import { TodoService } from './todo.service'
import { Observable } from 'rxjs/Observable';

@Component({
  templateUrl: 'todos.html',
  providers: [TodoService]
})
export class todoListPage {
  public todoList: Array<string>;

  constructor(private nav: NavController, private todoService: TodoService) {
  }

  ngOnInit() {
    // this.todoList = JSON.parse(localStorage.getItem("todos"));
    //   if (!this.todoList) {
    //     this.todoList = [];
    //   }
     this.todoService.getTodoList().subscribe(todos => {
       this.todoList = todos
     });
  }

  delete(index: number) {
    this.todoList.splice(index, 1);
    localStorage.setItem("todos", JSON.stringify(this.todoList));
  }

  add() {
    this.nav.push(addtodoPage);
  }

}

