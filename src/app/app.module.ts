import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectComponent } from './project/project.component';
import { ProjectService } from './services/ProjectService';
import { UserService } from './services/UserService';
import { UserListComponent } from './user-list/user-list.component';
import { UserComponent } from './user/user.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
	{
		path: '',
		redirectTo: '/projects', 
		pathMatch: 'full',
	},
	{
		path: 'projects',
		component: ProjectListComponent,
	},
	{
		path: 'users',
		component: UserListComponent,
	},
	{
		path: '**',
		component: PageNotFoundComponent,
	}
];

@NgModule({
  declarations: [
    AppComponent,
    ProjectListComponent,
    ProjectComponent,
    UserListComponent,
    UserComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
	HttpClientModule,
	RouterModule.forRoot(routes),
  ],
  providers: [
	ProjectService,
	UserService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
