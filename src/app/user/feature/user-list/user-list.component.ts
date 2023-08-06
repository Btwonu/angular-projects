import { Component, Input, ViewChild } from '@angular/core';
import { UserService } from '../../service/UserService';
import { User } from 'src/app/models/User';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
	selector: 'app-user-list',
	templateUrl: './user-list.component.html',
	styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent {
	@Input() users: User[] = [];

	displayedColumns: string[] = ['username', 'email'];
	dataSource = new MatTableDataSource<User>(this.users);
	data: User[] = [];

	@ViewChild('paginator') paginator!: MatPaginator;

	constructor(private userService: UserService) {}

	ngAfterViewInit() {
		this.dataSource.paginator = this.paginator;
		this.data = this.userService.getUsers();
	}
}
