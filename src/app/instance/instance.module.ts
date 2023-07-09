import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InstanceRoutingModule } from './instance-routing.module';
import { InstanceListComponent } from './feature/instance-list/instance-list.component';
import { InstanceDetailComponent } from './feature/instance-detail/instance-detail.component';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    InstanceListComponent,
    InstanceDetailComponent
  ],
  imports: [
    CommonModule,
	InstanceRoutingModule,
	MatButtonModule,
	MatIconModule
  ]
})
export class InstanceModule { }
