import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';

import { ProjectService } from './projects/service/ProjectService';
import { UserService } from './users/service/UserService';

import { AppRoutingModule } from './app-routing.module';
import { ProjectComponent } from './projects/ui/project/project.component';
import { ProjectListComponent } from './projects/feature/project-list/project-list.component';
import { UserListComponent } from './user-list/user-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
	declarations: [
		AppComponent,
		UserComponent,
		ProjectComponent,
		ProjectListComponent,
		UserListComponent,
		PageNotFoundComponent,
	],
	imports: [BrowserModule, HttpClientModule, AppRoutingModule],
	providers: [ProjectService, UserService],
	bootstrap: [AppComponent],
})
export class AppModule {}
