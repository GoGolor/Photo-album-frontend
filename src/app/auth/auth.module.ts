import { NgModule } from '@angular/core';
import { SharedModule } from 'shared-module';

import { AuthComponent } from './auth/auth.component';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthService } from './auth.service';

@NgModule({
  imports: [
    AuthRoutingModule,
    SharedModule
  ],
  declarations: [
    AuthComponent
  ],
  providers: [AuthService]
})
export class AuthModule {}
