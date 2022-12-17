// import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DelictivoRoutingModule } from './delictivo-routing.module';
import { RegistroDelictivoComponent } from './registro-delictivo/registro-delictivo.component';
import { MapViewComponent } from './map-view/map-view.component';
import { PublicacionComponent } from './publicacion/publicacion.component';
import { CommentsComponent } from './publicacion/comments/comments.component';
import { CommentComponent } from './publicacion/comments/comment/comment.component';
import { CommentFormComponent } from './publicacion/comments/comment-form/comment-form.component';

@NgModule({
  declarations: [
    RegistroDelictivoComponent,
    MapViewComponent,
    PublicacionComponent,
    CommentsComponent,
    CommentComponent,
    CommentFormComponent,
  ],
  imports: [
    CommonModule,
    DelictivoRoutingModule,
    // BrowserModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class DelictivoModule {}
