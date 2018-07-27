import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  images: Array<string>;


users$:object;
  constructor(private userservice:UserService, private _http: HttpClient) { }

  ngOnInit() {
    this.userservice.getAllUsers().subscribe(
      data=>this.users$=data
    );
    this._http.get('https://picsum.photos/list')
        .pipe(map((images: Array<{id: number}>) => this._randomImageUrls(images)))
        .subscribe(images => this.images = images);


}
private _randomImageUrls(images: Array<{id: number}>): Array<string> {
  return [1, 2, 3].map(() => {
    const randomId = images[Math.floor(Math.random() * images.length)].id;
    return `https://picsum.photos/900/500?image=${randomId}`;
  });
}
}
