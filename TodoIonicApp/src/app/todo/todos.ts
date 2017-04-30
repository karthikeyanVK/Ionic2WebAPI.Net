import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { addtodoPage } from "./add/addtodo";
import { TodoService } from './todo.service'
import { Observable } from 'rxjs/Observable';
import {Todo} from './todo'
@Component({
  templateUrl: 'todos.html',
  providers: [TodoService]
})
export class todoListPage {
  public todoList: Array<Todo>;

  constructor(private nav: NavController, private todoService: TodoService) {
  }

  ngOnInit() {
    this.todoService.getTodoList().subscribe(todos => {
      this.todoList = todos
    });
  }

  delete(taskId: string) {
  this.todoService.delTask(taskId).subscribe(res => {
      console.log(res);
    });
  }

  add() {
    this.nav.push(addtodoPage);
    this.todoService.getTodoList().subscribe(todos => {
      this.todoList = todos
    });
  }

}

