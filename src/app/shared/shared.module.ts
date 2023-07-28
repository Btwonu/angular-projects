import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './ui/profile/profile.component';

import { MatCardModule } from '@angular/material/card';

@NgModule({
	declarations: [ProfileComponent],
	imports: [CommonModule, MatCardModule],
	exports: [ProfileComponent],
})
export class SharedModule {}
