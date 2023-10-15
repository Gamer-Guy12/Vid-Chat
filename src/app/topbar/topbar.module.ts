import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopbarComponent } from './topbar/topbar.component';
import { UtilModule } from '../util/util.module';
import { AuthModule } from '@angular/fire/auth';
import { IsSignedInService } from '../util/services/is-signed-in.service';

@NgModule({
  declarations: [
    TopbarComponent
  ],
  imports: [
    CommonModule,
    UtilModule,
    AuthModule
  ],
  exports: [
    TopbarComponent
  ],
  providers: [
    IsSignedInService
  ]
})
export class TopbarModule { }
