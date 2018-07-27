import { PostService } from './../post.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  pageSize:number=5;
  Allposts: Object;
  startind:number=0;
  endind:number=5;
  pageTotal:number[]=[];
  currentPage:number=1;
  constructor(private postService: PostService) { 
   
  }
  
  pageSizing(s:number) {
    this.currentPage=1;
    this.pageSize=s;
    this.pageTotal.length=100/this.pageSize;
    this.startind=0;
    this.endind=this.pageSize;
    
    
    
  }
  pageDirection(p:number){
  this.currentPage=p;
  this.startind=(p-1)*this.pageSize;
  this.endind=p*this.pageSize;
  }
  ngOnInit() {
  
    this.pageTotal.length=100/this.pageSize;
  this.postService.getAllPosts().subscribe(
    data=>this.Allposts=data, 
  );
 
  
  
 
  
  }
  

}
