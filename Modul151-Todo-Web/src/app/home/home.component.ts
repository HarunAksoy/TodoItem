import { Component, OnInit, Input } from '@angular/core';
import { TodoItemService } from '../Services/todo-item.service';
import { UserService } from '../Services/user.service';
import { NgForm } from '@angular/forms';
import { HttpClient } from "@angular/common/http";
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {



  options = [
    { name: "low", value: 1 },
    { name: "medium", value: 2 },
    { name: "high", value: 3 }
  ];




  constructor(private todoitemservice: TodoItemService, private userservice: UserService, private toastr: ToastrService, private http: HttpClient) { }

  todoitem: any[];
  myid;



  ngOnInit() {
    this.getUserId();
    this.getAllItems();
    this.resetForm();
  }


  getAllItems() {
    this.todoitemservice.getTodoItem().subscribe(
      data => {
        this.todoitem = data;
      })
  }






  deleteItem(index) {
    console.log('your id index: %1', index)
    this.delete(index).subscribe(
      t => {
        this.toastr.success('Item successfully deleted');
        this.getAllItems();
      },
      err => {
        console.log(err)
      }
    );
  }

  delete(id) {
    console.log('your id is: %1', id);
    return this.http.delete<any[]>('https://localhost:5001/api/todoitem/' + id);
  }

  editItem(ti){
    this.todoitemservice.formData = Object.assign({}, ti)
    console.log(this.todoitemservice.formData);
    }
  



  onSubmit() {
    if(this.todoitemservice.formData.id == 0)
    this.todoitemservice.createTodoItem(this.todoitemservice.formData).subscribe(
      res => {
        this.toastr.success('New Item created!');
        this.getAllItems();
      },
      err => {
        console.log(err);
        this.toastr.error('Date is not valid (time)','Failed');

      }

    );
    else {
      this.updateItem();
    }
    this.resetForm();
  }

  updateItem(){
    this.todoitemservice.changeTodoItem(this.todoitemservice.formData).subscribe(
      res => {
        this.toastr.info('Item succesful edited!');
        this.getAllItems();
        console.log(res)
        
      },
      err => {
        console.log(err)
        console.log(this.todoitemservice.formData.id)
      }
    );
    this.resetForm();
  }


  getUserId() {
    this.userservice.getId().subscribe(
      (data: any) => {
        this.todoitemservice.formData.user_id = data.id;
        this.myid = data.id;
      }

    );

  }


  resetForm(form?: NgForm) {
    this.getUserId();
    if (form != null)
      form.resetForm();
    this.todoitemservice.formData = {
      id: 0,
      user_id: this.myid,
      name: '',
      date: null,
      message: '',
      importance: ''
    }
  }


}




