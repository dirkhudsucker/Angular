import {Router} from '@angular/router';
import { NumberService } from './../number.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-number',
  templateUrl: './number.component.html',
  styleUrls: ['./number.component.scss']
})
export class NumberComponent implements OnInit {
  images: Array<string>;
  model:any;
  showMsg:boolean=false;
  constructor(private route:Router,private numberservice:NumberService) { }

  ngOnInit() {
    this.numberservice.getImg("69").subscribe(data=>this.images=data);
  }
valid():void{
  if((this.model.length==7||this.model.length==10)&&!isNaN(Number(this.model))){
this.route.navigate([`/number/${this.model}`],{queryParams:{page:1,pageSize:50}});
}

else{
  this.showMsg=true;
}

}
onFocus():void{
  this.showMsg=false;
  console.log(this.showMsg);
}
}
