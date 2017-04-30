
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Todo } from './todo'
@Injectable()


export class TodoService {
    private todoServiceUrl = "http://localhost:58963/";
    constructor(private http: Http) {

    }
    getTodoList(): Observable<Array<Todo>> {
        var todoListUrl = this.todoServiceUrl + "api/Todo"
        return this.http.get(todoListUrl).map(this.extractData).catch(this.handleError);
    }
    saveTask(todo: string): any {
        var todoListUrl = this.todoServiceUrl + "api/Todo";
        let body = JSON.stringify({
            "TaskName": todo
        });
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post(todoListUrl, body, options).map(this.extractData).catch(this.handleError);
    }
    delTask(todoId: string): any {
        var todoListUrl = this.todoServiceUrl + "api/Todo/deletetask";
        let body = JSON.stringify({
            "TaskId": todoId
        });
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post(todoListUrl, body,options).map(this.extractData).catch(this.handleError);
    }

    private extractData(res: Response) {
        let body = res.json();
        return body || [];
    }
    private handleError(error: Response | any) {
        // In a real world app, you might use a remote logging infrastructure
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }

}