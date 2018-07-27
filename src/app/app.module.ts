import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import { UsersComponent } from './users/users.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DetailsComponent } from './details/details.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { NumberComponent } from './number/number.component';
import { NumDetailsComponent } from './num-details/num-details.component';
import { HttpModule }    from '@angular/http';


@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    UsersComponent,
    SidebarComponent,
    DetailsComponent,
    NumberComponent,
    NumDetailsComponent
  ],
  imports: [
    NgbModule.forRoot(),
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
