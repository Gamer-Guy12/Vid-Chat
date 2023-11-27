import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForumHomeComponent } from './forum-home/forum-home.component';
import { ForumListingComponent } from './forum-listing/forum-listing.component';
import { FormsModule } from '@angular/forms';
import { ForumComponent } from './forum/forum.component';
import { ForumPostComponent } from './forum-post/forum-post.component';
import { UtilModule } from '../util/util.module';

@NgModule({
  declarations: [
    ForumHomeComponent,
    ForumListingComponent,
    ForumComponent,
    ForumPostComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    UtilModule
  ]
})
export class ForumModule { }
