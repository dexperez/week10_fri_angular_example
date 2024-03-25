import { Component } from '@angular/core';
import { RESTApiServiceService } from '../shared/restapi-service.service';
import { FormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';
@Component({
  selector: 'app-users',
  standalone: true,
  imports: [FormsModule, JsonPipe],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {

  userList = [] ;
  constructor(private restApiService: RESTApiServiceService) {}

  getUserData(){
    this.restApiService.getUsers()
          .subscribe((response) =>{
              console.log(response.data);
              this.userList = response.data;
          })
    
  }

}
