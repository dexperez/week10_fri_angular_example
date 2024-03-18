import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StudentComponent } from './student/student.component';
import { EmployeeComponent } from './employee/employee.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, StudentComponent, EmployeeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Van Dexter Perez';

  person = {
    name: 'Van Dexter Perez',
    age: 24
  }

  employee = {
    firstname: 'John',
    lastname: 'Doe',
    age: 24,
    city: 'Toronto',
    designation: 'Software Developer',
    salary: 30000

  }
}
