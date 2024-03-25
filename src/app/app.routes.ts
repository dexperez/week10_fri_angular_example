import { Routes } from '@angular/router';
import { StudentComponent } from './student/student.component';
import { FacultyComponent } from './faculty/faculty.component';
import { UsersComponent } from './users/users.component';
export const routes: Routes = [
    // {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'stud', component: StudentComponent},
    {path: 'faculty', component: FacultyComponent},
    {path: 'user', component: UsersComponent}
];
