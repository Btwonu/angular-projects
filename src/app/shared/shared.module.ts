import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './ui/profile/profile.component';

import { MatCardModule } from '@angular/material/card';
import { AvatarComponent } from './ui/avatar/avatar/avatar.component';

@NgModule({
	declarations: [ProfileComponent, AvatarComponent],
	imports: [CommonModule, MatCardModule],
	exports: [ProfileComponent, AvatarComponent],
})
export class SharedModule {}
