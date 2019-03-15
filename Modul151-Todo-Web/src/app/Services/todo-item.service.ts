import { Injectable } from '@angular/core';
import { TodoItem } from '../shared/todo-item.model';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TodoItemService {
  formData: TodoItem;
  myList: TodoItem[];
  readonly rootURL = 'https://localhost:5001/api';
  constructor(private http: HttpClient) { }

  //POST
  createTodoItem(formData: TodoItem) {
    return this.http.post(this.rootURL + '/TodoItem', formData)
  }

  
  //PUT
  changeTodoItem(formData: TodoItem) {
    return this.http.put(this.rootURL + '/TodoItem/'+formData.id, formData)
  }


  //GET
  getTodoItem() {
    return this.http.get<any>(this.rootURL + '/TodoItem')
  }


}
