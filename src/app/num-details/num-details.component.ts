import { NumberService } from './../number.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Router} from '@angular/router';
import {NgZone} from'@angular/core';
@Component({
  selector: 'app-num-details',
  templateUrl: './num-details.component.html',
  styleUrls: ['./num-details.component.scss']
})
export class NumDetailsComponent implements OnInit {
num:object;
lists:object;
totalNum:number;
PageSize:number;
page:number;
show:object;
WindowWidth:number;
PageTotalInPagination:number=5;
  constructor(private ngzone:NgZone,private router:Router,private numberService:NumberService,private route:ActivatedRoute) { 
    window.onresize = (e) => {
      ngzone.run(() => {
          this.WindowWidth = window.innerWidth;
         
      });
      if(this.WindowWidth<659){
        this.PageTotalInPagination=3;
      }
    };
  
  }
setPage(event:any):void{
  
  console.log(event);
  this.router.navigate([`/number/${this.num}`],{queryParams:{page:event,pageSize:this.PageSize}});
  // this.numberService.getList(`http://localhost:8080/number?number=${this.num}&pageSize=50&page=${this.page}`).subscribe(
  //     data=>{this.lists=data;
           
  //     }
  //   );   
}
pageSizing(pageSize:number):void{
if(pageSize==this.PageSize) return;
let ratio=pageSize/this.PageSize;
this.PageSize=pageSize;
this.router.navigate([`/number/${this.num}`],{queryParams:{page:this.page/ratio,pageSize:this.PageSize}});
}
  ngOnInit() {
    this.route.params.subscribe(params =>{
      this.route.queryParams.subscribe(query=>{
        this.page=query.page;
        this.PageSize=query.pageSize;
      this.num = params.num;
      this.numberService.getList(`http://localhost:8080/number?number=${this.num}&pageSize=${query.pageSize}&page=${query.page}`).subscribe(
      data=>{this.lists=data;
             if(this.lists['totalNum']) {
               this.totalNum=this.lists['totalNum'];
             }
        }
      );
    })
    });
    
    
    }
  }


