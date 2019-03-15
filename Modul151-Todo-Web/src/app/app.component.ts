import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Modul151-Todo-Web';

  constructor(private router: Router) { }

  onLogout(){
    localStorage.removeItem('token');
    this.router.navigate(['/start'])
  }
}


