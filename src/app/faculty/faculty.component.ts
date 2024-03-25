import { Component } from '@angular/core';
import { UpperCasePipe, 
  LowerCasePipe, 
  DatePipe , 
  CurrencyPipe} from '@angular/common';
import { GreetPipe } from '../greet.pipe';

@Component({
  selector: 'app-faculty',
  standalone: true,
  imports: [UpperCasePipe, 
    LowerCasePipe, 
    DatePipe,
    CurrencyPipe,
    GreetPipe],
  templateUrl: './faculty.component.html',
  styleUrl: './faculty.component.css'
})
export class FacultyComponent {
  name = 'Jack Cool';
  designation = 'Janitor';
  dob = new Date ('1999-01-01')
}
