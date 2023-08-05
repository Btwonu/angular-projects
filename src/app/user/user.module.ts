import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { UserComponent } from './ui/user/user.component';
import { UserListComponent } from './feature/user-list/user-list.component';

@NgModule({
	declarations: [
		UserComponent,
		UserListComponent,
	],
	imports: [
		CommonModule,
		UserRoutingModule,
		MatTableModule,
		MatPaginatorModule,
	],
})
export class UserModule {}
