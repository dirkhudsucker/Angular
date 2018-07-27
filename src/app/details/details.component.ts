import { Observable } from 'rxjs';
import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  user$: Object;
  id:number;
  constructor(private router:Router,private route: ActivatedRoute, private userservice: UserService) {
    
    
  }

  ngOnInit() {
    this.route.params.subscribe(params => {this.id = +params.id;
      this.userservice.getOneUsers(this.id).subscribe(
        data=>this.user$=data
        );
    });
    
  }
view(){
this.id++;
this.router.navigate(['/details',this.id]);
}
}
