import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectComponent } from './project/project.component';
import { ArticleService } from './services/ArticleService';
import { UserService } from './services/UserService';
import { UserListComponent } from './user-list/user-list.component';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectListComponent,
    ProjectComponent,
    UserListComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
	HttpClientModule,
  ],
  providers: [
	ArticleService,
	UserService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
