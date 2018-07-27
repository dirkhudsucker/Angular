import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})

export class UserService {
  

  constructor(private apiService:ApiService) { }
  getAllUsers():Observable<any[]>{
  return this.apiService.getAll('users');
  }
  getOneUsers(id):Observable<any[]>{
    return this.apiService.getOne('users',id);
    }
  
}


