import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { UserComponent } from './user/ui/user/user.component';

import { ProjectService } from './project/service/project.service';
import { UserService } from './user/service/UserService';

import { AppRoutingModule } from './app-routing.module';
import { UserListComponent } from './user/feature/user-list/user-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
	declarations: [
		AppComponent,
		PageNotFoundComponent,
		DashboardComponent,
	],
	imports: [
		BrowserModule,
		HttpClientModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		MatButtonModule,
		MatIconModule,
		MatSidenavModule,
		MatToolbarModule,
		MatGridListModule,
		MatCardModule,
		MatMenuModule,
	],
	providers: [ProjectService, UserService],
	bootstrap: [AppComponent],
})
export class AppModule {}
