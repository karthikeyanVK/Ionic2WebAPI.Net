import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TodoService } from '../todo.service'
//import { Observable } from 'rxjs/Observable';
@Component({
  templateUrl: 'addtodo.html',
   providers: [TodoService]
})
export class addtodoPage {
  public todoList: Array<string>;
  public todoItem: string;

  constructor(private nav: NavController, private todoService: TodoService) {
  }

  save() {
    if (this.todoItem != "") {
      this.todoService.saveTask(this.todoItem).subscribe(res => {
        console.log(res);
      });
      this.nav.pop();
    }
  }
}

