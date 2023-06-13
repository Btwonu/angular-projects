import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectComponent } from './project/project.component';
import { ArticleService } from './services/ArticleService';

@NgModule({
  declarations: [
    AppComponent,
    ProjectListComponent,
    ProjectComponent
  ],
  imports: [
    BrowserModule,
	HttpClientModule,
  ],
  providers: [
	ArticleService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
