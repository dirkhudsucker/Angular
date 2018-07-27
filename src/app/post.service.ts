import { ApiService } from './api.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private apiService:ApiService) { }
  getAllPosts():Observable<any[]>{
    return this.apiService.getAll('posts');
    }
}
